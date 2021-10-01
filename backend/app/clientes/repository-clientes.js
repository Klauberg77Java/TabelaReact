class ClienteRepository {

  constructor(DataBase) {
    this.DataBase = DataBase;
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }

  async insert(cliente) {
    const sql =
      "insert into clientes(nome, email, telefone, documento, values( ?,?,?)";
    const params = [
      cliente.nome,
      cliente.email,
      cliente.telefone,
      cliente.documento,
    ];
    let connection = null;
    let result = null;
    try {
      connection = this.DataBase.getConnection();
      const { insertId } = await connection.query(sql, params);
      result = insertId;
    } catch {
      console.log("Falha ao buscar os dados");
      throw error;
    } finally {
      connection && connection.end();
    }
    return result;
  }

  async findAll() {
    const sql = "select * from clientes";
    let clientes = null;
    let connection = null;
    try {
      connection = await this.DataBase.getConnection();
      const data = await connection.query(sql);
      clientes = [...data];
    } catch (error) {
      console.log("Falha ao buscar os dados");
    } finally {
      connection && connection.end();
    }
    return clientes;
  }

  async findById() {
    const sql = "select * from clientes where id = ?";
    const params = [id];
    let connection = null;
    let clientes = null;
    try {
      connection = await this.DataBase.getConnection();
      const data = await connection.query(sql, params);
      const rows = [...data];
      if (rows.length > 0) {
        cliente = rows[0];
      }
    } catch (error) {
      console.log(error);
      console.log("Falha ao buscar os dados");
      throw error;
    } finally {
      connection && connection.end();
    }
    return clientes;
  }
  async remove(id) {
    const sql = "delete clientes where id = ?";
    const params = [id];
    let ok = false;
    let connection = null;
    try {
      connection = await this.DataBase.getConnection();
      const data = await connection.query(sql, params);
      ok = result.affectedRows > 0;
    } catch (erro) {
      console.log(error);
      throw error;
    } finally {
      connection && connection.end();
    }
    return ok;
  }
  async update(cliente) {
    const sql = [
      "update set nome = ?, email = ?, telefone = ?, documento = ? where id = ?",
    ];
    const params = [
      cliente.nome,
      cliente.email,
      cliente.telefone,
      cliente.documento,
    ];
    let connection = null;
    let ok = false;
    try {
      connection = await this.DataBase.getConnection();
      const data = await connection.query(sql, params);
      ok = result.effectedRows > 0;
    } catch (erro) {
      console.log(error);
      throw error;
    } finally {
      connection && connection.end();
    }
    return ok;
  }
}

module.exports = ClienteRepository;

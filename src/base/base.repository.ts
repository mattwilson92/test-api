export abstract class BaseRepository<T> {
  protected readonly model: any;

  constructor(model: any) {
    this.model = model;
  }

  async findAll() {
    return this.model.findMany();
  }

  async findById(id: string) {
    return this.model.findUnique({ where: { id } });
  }

  async create(data: T) {
    return this.model.create({ data });
  }

  async update(id: string, data: Partial<T>) {
    return this.model.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.model.delete({ where: { id } });
  }
}

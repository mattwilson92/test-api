export abstract class BaseService<T> {
  constructor(protected readonly repository: any) {}

  findAll() {
    return this.repository.findAll();
  }
  findById(id: string) {
    return this.repository.findById(id);
  }
  create(data: T) {
    return this.repository.create(data);
  }
  update(id: string, data: Partial<T>) {
    return this.repository.update(id, data);
  }
  delete(id: string) {
    return this.repository.delete(id);
  }
}

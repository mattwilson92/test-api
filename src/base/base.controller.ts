import { Context } from 'hono';

export abstract class BaseController<T> {
  constructor(protected readonly service: any) {}

  findAll = async (c: Context) => c.json(await this.service.findAll());
  findById = async (c: Context) => {
    const id = c.req.param("id");
    return c.json(await this.service.findById(id));
  };
  create = async (c: Context) => {
    const body = await c.req.json<T>();
    return c.json(await this.service.create(body));
  };
  update = async (c: Context) => {
    const id = c.req.param("id");
    const body = await c.req.json<Partial<T>>();
    return c.json(await this.service.update(id, body));
  };
  delete = async (c: Context) => {
    const id = c.req.param("id");
    return c.json(await this.service.delete(id));
  };
}

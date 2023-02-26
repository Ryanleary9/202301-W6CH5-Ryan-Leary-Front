/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { BearStructure, ProtoBearStructure } from "../../models/bear";

export interface BearApiRepoStructure {
  load(): Promise<BearStructure[]>;
  loadId(id: BearStructure["id"]): Promise<BearStructure>;
  add(task: ProtoBearStructure): Promise<BearStructure>;
  update(task: Partial<ProtoBearStructure>): Promise<BearStructure>;
  delete(id: BearStructure["id"]): Promise<void>;
}

export class BearApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/bears";
  }

  async load(): Promise<BearStructure[]> {
    const response = await fetch(this.url);
    const data = (await response.json()) as BearStructure[];
    return data;
  }
  async loadId(id: BearStructure["id"]): Promise<BearStructure> {
    const url = this.url + "/" + id;
    const response = await fetch(url);
    const data = (await response.json()) as BearStructure;
    return data;
  }

  async add(bear: ProtoBearStructure): Promise<BearStructure> {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(bear),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await response.json()) as BearStructure;
    return data;
  }

  async update(bear: Partial<BearStructure>): Promise<BearStructure> {
    const url = this.url + "/" + bear.id;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(bear),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await response.json()) as BearStructure;
    return data;
  }

  async delete(id: BearStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    await fetch(url, {
      method: "DELETE",
    });
  }
}

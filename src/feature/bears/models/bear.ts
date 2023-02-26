type HasID = {
  id: number;
};

export type ProtoBearStructure = {
  name: string;
  type: string;
  height: string;
  weight: string;
};

export type BearStructure = HasID & ProtoBearStructure;

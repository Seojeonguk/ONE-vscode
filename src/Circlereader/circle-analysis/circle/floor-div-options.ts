// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class FloorDivOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): FloorDivOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsFloorDivOptions(bb: flatbuffers.ByteBuffer, obj?: FloorDivOptions):
      FloorDivOptions {
    return (obj || new FloorDivOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsFloorDivOptions(bb: flatbuffers.ByteBuffer, obj?: FloorDivOptions):
      FloorDivOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new FloorDivOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startFloorDivOptions(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endFloorDivOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createFloorDivOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    FloorDivOptions.startFloorDivOptions(builder);
    return FloorDivOptions.endFloorDivOptions(builder);
  }
}

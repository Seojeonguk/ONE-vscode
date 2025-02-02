// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class DequantizeOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): DequantizeOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsDequantizeOptions(bb: flatbuffers.ByteBuffer, obj?: DequantizeOptions):
      DequantizeOptions {
    return (obj || new DequantizeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsDequantizeOptions(
      bb: flatbuffers.ByteBuffer, obj?: DequantizeOptions): DequantizeOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new DequantizeOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static startDequantizeOptions(builder: flatbuffers.Builder) {
    builder.startObject(0);
  }

  static endDequantizeOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createDequantizeOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    DequantizeOptions.startDequantizeOptions(builder);
    return DequantizeOptions.endDequantizeOptions(builder);
  }
}

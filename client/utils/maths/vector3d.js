class Vector3D {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(v) {
    return new Vector3D(x + v.x, y + v.y, z + v.z)
  }

  substract(v) {
    return new Vector3D(x - v.x, y - v.y, z - v.z)
  }

  get toAttribute() {
    return `${this.x} ${this.y} ${this.z}`
  }

  toObject() {
    return { x: this.x, y: this.y, z: this.z }
  }

  static slope(p1, p2) {
    return new Vector3D(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z)
  }

  static fromObject(obj) {
    return new Vector3D(obj.x, obj.y, obj.z)
  }
}

export default Vector3D
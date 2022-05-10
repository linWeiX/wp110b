class Vector {
    constructor(x,y,z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    length() {
      let [x,y,z] = [this.x,this.y,this.z]
      return Math.sqrt(x*x+y*y+z*z)
    }
  
    neg() {
      return new Vector(-this.x,-this.y,-this.z)
    }
  
    add(p2) {
      return new Vector(this.x+p2.x,this.y+p2.y,this.z+p2.z)
    }
  
    sub(p2) {
      return this.add(p2.neg())
    }
  
    dot(p2) {
      return this.x*p2.x,this.y*p2.y,this.z*p2.z
    }
  
    distance(p2) {
      return this.sub(p2).length()
    }
  
    toString() {
      return '(' + this.x + ',' + this.y + ',' + this.z+')';
    }
  }
  
  let p = new Vector(5,6,7), p2 = new Vector(1,2,3)
  console.log(p)
  console.log(p.toString())
  console.log(p+'')
  console.log('p.length()=', p.length())
  console.log('p.sub(p2)=', p.sub(p2))
  console.log('p.sub(p2).length()=', p.sub(p2).length())
  console.log('p.dot(p2)=', p.dot(p2))

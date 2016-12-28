function() {
   /*
      Multiply a number, vector or matrix by a number, vector or matrix.
   */
   this.label = "Mult";
   this.render = function() {
      mLine( [-1, 1], [ 1, -1] );
      mLine( [ 1, 1], [-1, -1] );
      if (isDef(this.in_DEPRECATED_PORT_SYSTEM[0]) && isDef(this.in_DEPRECATED_PORT_SYSTEM[1]))
         this.outValue[0] = mult(this.inValue_DEPRECATED_PORT_SYSTEM[0], this.inValue_DEPRECATED_PORT_SYSTEM[1]);
   }
}

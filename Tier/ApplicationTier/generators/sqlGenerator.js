'use strict';

module.exports = class sqlGenerator {
  constructor() {
    this.code = '';
  }

  generate(data) {
      if(data.length > 0) {

        for (let i = 0; i < data.length; i++) {
            let entity = data[i];
            
            this.code += ('DROP TABLE IF EXISTS '+ entity.name +' ;')
            this.code += ('CREATE TABLE ' + entity.name + '( \n');

            if(entity.attr.length > 0) {

              for(let i = 0; i < entity.attr.length; i++) {
                  let attribute = entity.attr[i];
                  this.newField(
                      attribute.name,
                      attribute.type,
                      attribute.primaryKey,
                  );
                  if( i === entity.attr.length-1)
                    this.code +=('\n');
                    else {
                      this.code +=(',\n');
                    }

              }
            }
            else {
              this.code += ('INT id AUTO_INCREMENT PRIMARY KEY \n');
            }
            this.code += (')\n\n');
        }

        let aux = this.code;
        this.code = '';

        return aux;
      }
      else {
          return '';
      }
  }

  newField(name, type,  primaryKey) {


      this.code += (name + ' ');
      if(type === 'String')
      this.code += ('VARCHAR(30) ');
      if(type === 'Integer')
      this.code += ('INT(6) ');
      if(type === 'Double')
      this.code += ('FLOAT(16) ');
      if(type === 'Data')
      this.code += ('DATE ');
      if(type === 'Boolean')
      this.code += ('BOOLEAN ');
      if(primaryKey === 'true'){
          this.code += (' PRIMARY KEY');
      }


}


}

import { log } from "console";
import * as path from 'path'
import * as uuid from 'uuid'

class FileService {
  
  async saveFile(file) {
        try{
            log(file)
             const fileName = uuid.v4()+'.jpeg'
      const filePath  = path.resolve( 'static', fileName)
      file.mv(filePath)
      return fileName
        }
    catch(e){
        log(e.message, 'here')
    }
     
  }
}

export default new FileService();

import { Model } from '@beardedframework/lumberjack';


export default {{name}}  extends Model{

  public table : string = '{{tableName}}';

  public fillable : Array<string> = [];
  
  public hidden : Array<string> = [];

  constructor(data : any = {}){
     super(data);
  }
}


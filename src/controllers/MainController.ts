import ResponseService from '../services/ResponseService';
import { to } from '@beardedframework/lumberjack';
import * as _ from 'lodash'

export default class MainController{
  
  protected response = ResponseService;

  /*
   * crud method to fetch data
   *
   * @param { model } model
   * @param { number } page
   * @param { boolean } isComplex
   *
   * @rerurn { promise }
   * -*/
  public storeCrud = async (Model, req) => {
  
    const self = this;

    return new Promise(async (resolve, reject) => {
    
      const body = req.body;
      const elToBeSaved = self.createObject(Model, body)

      const model = Model.create(elToBeSaved);

      let err, created;
      [err, created] = await to(model.save());
      
      if(err || !created)
        reject(err);

      let el = Model.find(created.insertId)

      resolve(el);
    
    });
  }

  /*
   * crud method to fetch data
   *
   * @param { model } model
   * @param { number } page
   * @param { boolean } isComplex
   *
   * @rerurn { promise }
   * -*/
  public updateCrud = async (Model, req) => {
  
    const self = this;
    return new Promise(async (resolve, reject) => {

      const id = req.params.id;
      const body = req.body;

      const elToBeSaved = self.createObject(Model, body)

      let error, model
      [error, model] = await to(Model.find(id));

      if(error || !model)
        reject(error)

      model = this.updateModelValues(model, elToBeSaved);
      
      let err, updated;
      [err, updated] = await to(model.save());

      if(err || !updated)
        reject(err);

      resolve(model);
    });
  }
  /*
   * crud method to fetch data
   *
   * @param { model } model
   * @param { number } page
   * @param { boolean } isComplex
   *
   * @rerurn { promise }
   * -*/
  public async fetchCrud(model, page : number, isComplex : boolean = false) : Promise<any> {

    if(isComplex)
      console.log('there is no complex query yet');
    else{

      if(page > 0)
        return model.fetchPaginated(page);
      return model.fetchAll();
    }

  }


  /*
   * crud method to get single data
   *
   * @param { model } model
   * @param { number } id
   * @param { boolean } isComplex
   *
   * @rerurn { promise }
   * -*/
  public async getCrud(model, id : number, isComplex : boolean = false) : Promise<any> {

    if(isComplex)
      console.log('there is no complex query yet');
    else{
      return model.find(id);
    }
  }
  /*
   *
   * generate the element to be saved by given model
   *
   * @param { object } body
   * @param { model } model
   *
   * @return object
   *
   * */
  private createObject(Model, body){
  
    let model = new Model();
    let elToBeSaved = {}
    
    for(let key in body){
      
      if(model.fillable.includes(key))
        elToBeSaved[key] = body[key]
    
    }
    return elToBeSaved;
  }

  /*
   *
   * sync model data and values to be saved
   *
   * @param { object } body
   * @param { model } model
   *
   * @return object
   *
   * */
  private updateModelValues(model, values){

    for(let key in values){
      model.data[key] = values[key];
    }
    return model;
  }

}

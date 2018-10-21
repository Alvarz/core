import User from '../models/User'
import { MainController }  from '@beardedframework/core'
import { to } from '@beardedframework/lumberjack';

export default class {{name}} extends MainController{
  
  /*
   * example method to store
   *
   * @param { express.req }
   * @param { express.res }
   *
   * @return { promise }
   * */
  public store =  async(req, res) => : Promise<any> {
    
   return this.response.success('controller store method', {}, res)
  }

  /*
   * example method to update
   *
   * @param { express.req }
   * @param { express.res }
   *
   * @return { promise }
   * */
  public update = async  (req, res) => : Promise<any> {

   return this.response.success('controller update method', {}, res)
  }

  /*
   * example method to get
   *
   * @param { express.req }
   * @param { express.res }
   *
   * @return { promise }
   * */
  public get = async (req, res) => : Promise<any> {

   return this.response.success('controller get method', {}, res)
  }

  /*
   * example method to fetch
   *
   * @param { express.req }
   * @param { express.res }
   *
   * @return { promise }
   * */
  public fetch = async (req, res) =>  : Promise<any> {

   return this.response.success('controller fetch method', {}, res)
  }

}

import User from '../models/User'
import { MainController }  from '@beardedframework/core'
import { to } from '@beardedframework/lumberjack';

export default class {{name}} extends MainController{
  /*
   *
   *
   *
   * */
  public store =  async(req, res) => {

    
   return this.response.success('controller store method', {}, res)
  }

  /*
   *
   *
   *
   * */
  public update = async  (req, res) => {

   return this.response.success('controller update method', {}, res)
  }

  /*
   *
   *
   *
   * */
  public get = async (req, res) => {

   return this.response.success('controller get method', {}, res)
  }

  /*
   *
   *
   *
   * */
  public fetch = async (req, res) =>  {

   return this.response.success('controller fetch method', {}, res)
  }

}

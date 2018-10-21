
export default class ResponseService{

  private static OK = 200;
  private static BAD_REQUEST = 400;
  private static PAYMENT_REQUIRED = 402; //used as validation error
  private static FORBIDDEN = 403;
  private static NOT_FOUND = 404;
  private static METHOD_NOT_ALLOWED = 405;
  private static INTERNAL_SERVER_ERROR = 500;
  private static BAD_GATEWAY = 502;
  private static SERVICE_UNAVAILABLE = 503;

  /*
   * success response
   *
   * @param { string } message
   * @param { any } data
   * @param { any } resp
   * @param { boolean } state
   *
   * @return { object }
   */
  public static success(message : string, data : any, resp : any, state : boolean = true)  : object {

    return resp.status(ResponseService.OK).json({
      msg: message,
      status: state,
      data:data
    });
  }
  
  /*
   * error response
   *
   * @param { string } message
   * @param { any } error
   * @param { any } resp
   * @param { boolean } state
   *
   * @return { object }
   */
  public static error(message : string, error : any, resp : any, state : boolean = false )  : object {

    return resp.status(ResponseService.INTERNAL_SERVER_ERROR).json({
      msg: message,
      status: state,
      error: error
    });
  }

  /*
   * validation needed response
   *
   * @param { string } message
   * @param { any } validation
   * @param { any } resp
   * @param { boolean } state
   *
   * @return { object }
   */
  public static validationNotPassed(message : string, validation : any, resp : any, state : boolean = false ) : object{

    return resp.status(ResponseService.PAYMENT_REQUIRED).json({
      msg: message,
      status: state,
      validation: validation
    });
  
  
  }

}

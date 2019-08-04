/**
 * 项目配置文件
 * 配置状态码
 * 请求URL等
 */

class projectConfig {

  // 返回状态码=========================.start
  static RESPONSE_CODE_ERROR_SERVER_ERROR = 500; // 500 系统内部异常
  static RESPONSE_CODE_ERROR_COMPANY_NOJOIN = '1030'; // 该公司未入驻
  static RESPONSE_CODE_ERROR_WAREHOUSE_NULL = '6037'; // 查无次仓库
  static RESPONSE_CODE_ERROR_LOG_OUT = '2000' //未登录
  static RESPONSE_CODE_ERROR_UPDATE_FLOATINGPRICE = '6038' //批量修改升贴水出错
  static RESPONSE_CODE_ERROR_UPDATE_PRODUCT_FLOATINGPRICE = '6040' //修改商品升贴水出错

  static RESPONSE_CODE_SUCESS = '0000';
  static PROJECT_HOST_NAME = process.env.PROJECT_HOST_NAME;
  static API_HOST_NAME = process.env.HOST_NAME;
  // 登录
  static REQUEST_URL_LOGIN = '/user/login'
  // 注册

}

export {
  projectConfig
}

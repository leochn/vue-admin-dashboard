import Mock from 'mockjs';
import article_tableAPI from './article_table';


// // table example相关
Mock.mock(/\/article_table\/list/, 'get', article_tableAPI.getList);
Mock.mock(/\/article_table\/p/, 'get', article_tableAPI.getPv);



export default Mock;

// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimate from '../../../app/model/animate';
import ExportCategory from '../../../app/model/category';
import ExportComment from '../../../app/model/comment';
import ExportConfig from '../../../app/model/config';
import ExportDanmu from '../../../app/model/danmu';
import ExportData from '../../../app/model/data';
import ExportEposide from '../../../app/model/eposide';
import ExportHistory from '../../../app/model/history';
import ExportKey from '../../../app/model/key';
import ExportOrder from '../../../app/model/order';
import ExportPost from '../../../app/model/post';
import ExportRelation from '../../../app/model/relation';
import ExportReport from '../../../app/model/report';
import ExportShop from '../../../app/model/shop';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Animate: ReturnType<typeof ExportAnimate>;
    Category: ReturnType<typeof ExportCategory>;
    Comment: ReturnType<typeof ExportComment>;
    Config: ReturnType<typeof ExportConfig>;
    Danmu: ReturnType<typeof ExportDanmu>;
    Data: ReturnType<typeof ExportData>;
    Eposide: ReturnType<typeof ExportEposide>;
    History: ReturnType<typeof ExportHistory>;
    Key: ReturnType<typeof ExportKey>;
    Order: ReturnType<typeof ExportOrder>;
    Post: ReturnType<typeof ExportPost>;
    Relation: ReturnType<typeof ExportRelation>;
    Report: ReturnType<typeof ExportReport>;
    Shop: ReturnType<typeof ExportShop>;
    User: ReturnType<typeof ExportUser>;
  }
}
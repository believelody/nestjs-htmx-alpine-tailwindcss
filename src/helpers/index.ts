import { HelperDeclareSpec } from 'handlebars';
import toStringHelper from './toString.helper';
import partialHelper from './partial.helper';
import switchHelper from './switch.helper';
import letHelper from './let.helper';
import routesHelper from './routes.helper';
import caseHelper from './case.helper';
import defaultHelper from './default.helper';
import withDefaultHelper from './withDefault.helper';
import condHelper from './cond.helper';
import typeofHelper from './typeof.helper';
import objectHelper from './object.helper';
import arrayFromHelper from './arrayFrom.helper';
import numberIntoStringHelper from './numberIntoString.helper';
import chainHelper from './chain.helper';
import urlFromParamsHelper from './urlFromParams.helper';
import spreadHelper from './spread.helper';
import buttonHelper from './button.helper';
import uuidHelper from './uuid.helper';
import rawHelper from './raw.helper';
import svgHelper from './svg.helper';
import includesHelper from './includes.helper';
import baseUrlHelper from './baseUrl.helper';
import urlPathHelper from './urlPath.helper';
import setHelper from './set.helper';

export const custom: HelperDeclareSpec = {
    toString: toStringHelper,
    partial: partialHelper,
    switch: switchHelper,
    let: letHelper,
    routes: routesHelper,
    case: caseHelper,
    default: defaultHelper,
    withDefault: withDefaultHelper,
    cond: condHelper,
    typeof: typeofHelper,
    object: objectHelper,
    arrayFrom: arrayFromHelper,
    numberIntoString: numberIntoStringHelper,
    chain: chainHelper,
    urlFromParams: urlFromParamsHelper,
    spread: spreadHelper,
    button: buttonHelper,
    uuid: uuidHelper,
    raw: rawHelper,
    svg: svgHelper,
    includes: includesHelper,
    baseUrl: baseUrlHelper,
    urlPath: urlPathHelper,
    set: setHelper
};
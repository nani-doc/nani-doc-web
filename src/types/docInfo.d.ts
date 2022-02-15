/**
 * 文档信息
 */
export interface DocInfo {

    /**
     * 标题
     * */
    title: string;

    /**
     * 请求url
     * */
    url: string;

    /**
     * 请求类型
     * */
    contentType: string;

    /**
     * 请求参数typescript
     * */
    requestParamList: TypeInfo[];

    /**
     * 返回值typescript
     * */
    responseTypeList: TypeInfo[];

    /**
     * 请求方法
     * */
    requestMethod: RequestMethod;
}

/**
 * 请求方法
 */
interface RequestMethod {

    /**
     * 标题
     * */
    title: string;

    /**
     * 请求方式
     * */
    requestMethod: string;

    /**
     * typeScript类名
     * */
    className: string;

    /**
     * 返回值类型
     */
    responseClassName: string;

    /**
     * 返回值泛型类型
     */
    responseGenericClassName: string;

    /**
     * 请求url
     * */
    url: string;

    /**
     * 方法名
     * */
    methodName: string;
}

/**
 * 类型信息
 */
export interface TypeInfo {

    /**
     * 标题
     */
    title: string;

    /**
     * 名称
     */
    name: string;

    /**
     * 字段列表
     */
    fieldList: ModelField[];
}

/**
* model字段
* */
export interface ModelField {

    /**
     * 标题
     * */
    title: string;

    /**
     * 名称
     * */
    name: string;

    /**
     * 类型
     * */
    type: string;
}
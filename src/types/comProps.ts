

// 发质检测项以及检测结果组件
export interface IHairTitle {
    title: string
    describe: string
    iconType: string
}

// 发质评分组件
export interface ITitleScore {
    title: string
    score: number
}

// 标题加内容组件
export interface IExpound {
    title: string,
    analysis: string,
    degree?: string
}

// 图表组件
export interface ICharts{
    chartsXData: string[]
    chartsYData: number[]
}

// 健康页面组件-风险项
export interface IHealthHead{
    name: string
    key: string
    score: number
    explain: string
}

// 换发型组件
export interface IHairdoChange {
    name: string
    modelName: string
    describe: string
    img: string
    matchDegree: string
    [key:string]:any
}

// 商品组件
export interface IGoodsDataCom {
    img: string
    price: number
    old_price: number
    title: string
    keywords: string[]
    url: string
    jump_mp: number
    [key:string]:any
}

// 门店数据
export interface IStoreDataCom{
    title: string
    logo: string
    address?: string
    des: string
    [key:string]:any
}

// 优惠券数据
export interface ICouponsDataCom{
    type: number
    price: number
    old_price: number
    title: string
    des: string
    url: string
    jump_mp: number
    [key:string]:any
}


// 优惠券数据
export interface IFaceGoodsProps {
    title: string
    img: string
    url: string
    jump_mp: number
    [key:string]:any
}

// banner图的数据
 export interface IBannerImg {
    img: string,
    url: string
    jump_mp: number
    [key:string]:any
}

// 再测一次组件使用
export interface ISimpleBtnProps {
    /**iconType的可取值:
     * againIcon-再测一次
     * sexMale-性别切换男
     * sexFemale-性别切换女
    */
    iconType: string
    textContont: string
    positionTop?: number
    [key:string]:any
}

// 按钮组件使用
export interface IUseBtnProps {
    /** 
     * Type的可取值:
     * hairstyleSelect-发型选中
     * hairstyleUnselect-发型未选中
     * riskSelect-风险选中按钮
     * riskUnselect-风险未选中按钮
     * noRiskBtn-无风险按钮
     * longBtn-满屏的长按钮
     * viewDetails-查看详情按钮 
     * bottomOperation-底部可操作按钮
     * bottomInoperable-底部不可操作按钮
     * roundButton-圆形按钮（立即抢购）   
    */
    type: string
    textContont: string[]
    [key:string]: any
}

// 发型页面标题加内容组件
 export interface ILableContent{
    content: string,
    lableType: string
}

// 海报组件需要传递的 数据类型
export interface IPropsPosterData {
    h1?: string | string[]
    h2?: string | string[]
    h3?: string
    [key: string]: any
}
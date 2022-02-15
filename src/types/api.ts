
/**
 * // 接口数据返回的数据类型
 */

import { IdefaultObject } from '@/types/globle';

// animation接口数据返回的detection_info，和 points数据集合
export interface IJinglingAnimationPointsInfo{
    detection_info:IdefaultObject
    points:IdefaultObject
}

// animation接口数据返回的每个项目的集合
export interface IJinglingAnimationInfo{
    page_1_info?:IJinglingAnimationPointsInfo
    page_2_info?:IJinglingAnimationPointsInfo
    page_3_info?:IJinglingAnimationPointsInfo
    [key:string]:any
}

//  animation接口数据返回的项目的整理过后的用户拍照图片
export interface IJinglingAnimationImgs{
    align_img:string
}

//  animation接口数据返回的AI头发健康项目page_1_info的detection_info数据集合
export interface IAnimantionHairMedicalPage1DetectionInfo {
    "facemid_length"?: number|string,
    "facedown_length"?: number|string,
    "radar"?: {
        "distance": number|string,
        "maturity": number|string,
        "intelligence": number|string
    },
    "facedown_result"?: string,
    "facemid_result"?: string,
    "facemid_down_ratio"?: number[]
    "gender_name"?:string
    [key:string]:any
}

//  animation接口数据返回的AI头发健康项目page_2_info的detection_info数据集合
export interface IAnimantionHairMedicalPage2DetectionInfo {
    "lefteye_empty_length"?: number|string,
    "righteye_empty_length"?: number|string,
    "eyein_length"?: number|string,
    "righteye_length"?: number|string,
    "eyes_ratio"?: number[]|string[],
    "lefteye_length"?:number|string,
    "eye_empty_result"?: string

    [key:string]:any
}
//  animation接口数据返回的AI头发健康项目page_3_info的detection_info数据集合
export interface IAnimantionHairMedicalPage3DetectionInfo {
    "eyebrow_concentration"?: number|string,
    "eyebrow_uptrend_angle_right"?: number|string
    [key:string]:any
}

//  animation接口数据animation集合包括用户拍的调整后的照片，三个项目
export interface IJinglingAnimation{
    imgs:IJinglingAnimationImgs
    hair_swap:IJinglingAnimationInfo
    hair_medical:IJinglingAnimationInfo
    visceral_health:IJinglingAnimationInfo
    [key:string]:any
}

//  animation接口数据jingling_animation集合包括session_id，animation动画数据等
export interface IJinglingAnimationApi{
    session_id?:string
    animation?:IJinglingAnimation
    [key:string]:any
}

//  animation接口数据data集合包括jingling_animation数据等
export interface IJinglingAnimationDataApi{
    jingling_animation?:IJinglingAnimationApi
    [key:string]:any
}


//  animation接口数据包括status状态码，data数据，error_message错误信息
export interface IJinglingAnimationApiRes{
    status: number
    data?:string | IJinglingAnimationDataApi
    error_message?:string
    [key:string]:any
}

// 接口错误信息提示类型
export interface IDefaultErrTip{
	reqErr:string
	defaultAlertErr:string
	getErrorMsg:(error_message?:any)=>string
}

// 通用接口返回接口类型
export interface IJinglingApiRes{
    code?:number
    status?: number
    data?:string | IJinglingAnimationDataApi
    error_message?:string
    [key:string]:any
}
// 精灵数据接口返回接口类型
export interface IJinglingBusinessApiRes{
    code: number | string
    data?:string | IJinglingAnimationDataApi
    msg?:string
    [key:string]:any
}

// AR换发型给接口传递参数的类型session_id，modelName发型名colorName发色名
export interface IHairSwapMergeParams{
    session_id:string
    modelName:string
    colorName:string
    [key:string]:any
}

// AR换发型给接口hair_exchange传递默认参数的类型session_id，modelName发型名colorName发色名image图片
export interface IHairSwapMergeDefault{
    modelName:string
    colorName:string
    image?:string
    [key:string]:any
}

// AR换发型给接口传递默认参数的类型modelName发型名colorName发色名image图片
export interface IHairSwapMergeDataDefault{
    hair_exchange:IHairSwapMergeDefault
}

// AR换发型 在初始调用接口时返回的接口数据info数据类型
export interface IHairSwapInitDataHairInitInfoDefault{
    face_type?:string
    eyes_ratio?:number[]
    facedown_result?:string[]
    eye_empty_result?:string
    facemid_result?:string[]
    facemid_down_ratio?:number[]
    gender_name?:string
    [key:string]:any
}
// AR换发型 在初始调用接口时返回的接口数据imgs数据类型
export interface IHairSwapInitDataHairInitImgsDefault{
    banner?:string
    [key:string]:any
}
// AR换发型 在初始调用接口时返回的接口数据hair_init数据类型
export interface IHairSwapInitDataHairInitDefault{
    session_id?:string
    info: IHairSwapInitDataHairInitInfoDefault
    imgs: IHairSwapInitDataHairInitImgsDefault
    [key:string]:any
}

export interface IHairSwapInitDataDefault{
    hair_init:IHairSwapInitDataHairInitDefault
}

// AI头发检测 在初始调用接口时返回的接口数据hair_medical数据类型
export interface IHairMedicalDefault{
    hair_sparse_desc?: string
    hairline_optimize_desc?: string
    hair_texture_desc?: string
    beat_score?: number
    hair_losing_desc?: string
    total_score?: number
    gender_name?: string
    [key:string]: any
}

// AI头发检测 在初始调用接口时返回的接口数据hair_medical数据类型
export interface IHairMedicalDataDefault{
    hair_medical: IHairMedicalDefault
    [key:string]: any
}

export interface IHealthItemDefault {
    score?: string
    risk?: string
    items?: IdefaultObject
    [key:string]: any
}
// AI健康面诊 在初始调用接口时返回的接口数据visceral_health数据类型
export interface IVisceralHealthDefault{
    lung?: IHealthItemDefault
    renal?: IHealthItemDefault
    score?: number
    intestine?: IHealthItemDefault
    cholecyst?: IHealthItemDefault
    liver?: IHealthItemDefault
    spleen?: IHealthItemDefault
    bladder?: IHealthItemDefault
    colon?: IHealthItemDefault
    stomach?: IHealthItemDefault
    heart?: IHealthItemDefault
    gender_name?: string
    [key:string]: any
}


export interface IVisceralHealthDataDefault{
    visceral_health: IVisceralHealthDefault
    [key:string]: any
}

//文案管理和海报管理接口需要传递的参数类型
export interface ISpiritProposalv2Parmas{
    shopId:string
    appIds:{
        visceralHealth:number,
        hairMedical:number,
        hairSwap:number
        [key:string]: any
    }
    [key:string]: any
}



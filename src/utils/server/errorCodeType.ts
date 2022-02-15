export const errorCodeType = function(code:string):string{
    let msg:string = ""
    switch (code) {
        case 'more than one face detected':
            msg = '多张人脸';
            break;
        case 'No face found !':
            msg = '没找到人脸';
            break;   
        case 'incomplete face':
            msg = '人脸不完整';
            break; 
        case 'face too small':
            msg = '人脸过小';
            break; 
        case 'face rotate over range':
            msg = '人脸旋转过大';
            break; 
        case 'face over rotate':
            msg = '人脸旋转过大';
            break; 
        default:
            msg = '';  
    }
    return msg
} 
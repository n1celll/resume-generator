import { reactive } from "vue";


let _userInfo = JSON.parse(localStorage.getItem("userInfo"))
if(!_userInfo){
    _userInfo = {
        avatar:"/src/templates/BossVip1/imgs/avatar.jpg",
        name: "姓名",
        gender: "xx",
        address: "北京",
        birth: "1970-01-01",
        school: "xxxxx学校",
        tel: "13*********",
        email: "example@163.com",
        status: "离职",
        exp: "xx年",
        target: "C++",
        salary: "50K",
        jobs:[{}],
        projects:[{}],
    }
}

export const userInfo = reactive(_userInfo)
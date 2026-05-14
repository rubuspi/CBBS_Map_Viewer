// GitHub 机器人自动同步时间: 2026-05-14 11:41:57
const GRID_INFO = {
    "4401-001": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-002": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-003": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-004": {
        "status": "未认领",
        "investigator": "陈汉文",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-005": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "汤立群",
        "rec2026": "张学新",
        "date": "2026年5月2日"
    },
    "4401-006": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-007": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-008": {
        "status": "未认领",
        "investigator": "伍梓柠",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-009": {
        "status": "已完成",
        "investigator": "洪琳",
        "inv2026": "洪琳",
        "rec2026": "陈嘉文",
        "date": "2026年4月25日"
    },
    "4401-010": {
        "status": "待调查",
        "investigator": "崔润田",
        "inv2026": "崔润田",
        "rec2026": "李鸿",
        "date": ""
    },
    "4401-011": {
        "status": "未认领",
        "investigator": "李清泉",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-012": {
        "status": "已完成",
        "investigator": "陈汉文",
        "inv2026": "陈汉文",
        "rec2026": "窦婷",
        "date": "2026年5月12日"
    },
    "4401-013": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-014": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-015": {
        "status": "已完成",
        "investigator": "蒋文博",
        "inv2026": "蒋文博",
        "rec2026": "蒋枫媛",
        "date": "2026年5月2日"
    },
    "4401-016": {
        "status": "未认领",
        "investigator": "区祥敏",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-017": {
        "status": "未认领",
        "investigator": "胡勇婕",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-018": {
        "status": "已完成",
        "investigator": "冯超宝",
        "inv2026": "冯超宝",
        "rec2026": "崔军亚",
        "date": "2026年4月27日"
    },
    "4401-019": {
        "status": "未认领",
        "investigator": "罗天雅",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-020": {
        "status": "未认领",
        "investigator": "盛荷苗",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-021": {
        "status": "未认领",
        "investigator": "王彬",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-022": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "刘守国",
        "rec2026": "王潮漪",
        "date": "2026年5月4日"
    },
    "4401-023": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-024": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-025": {
        "status": "已完成",
        "investigator": "罗文洋",
        "inv2026": "李诗奇",
        "rec2026": "王晓佳",
        "date": "2026年5月9日"
    },
    "4401-026": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "陈彤",
        "rec2026": "沈若枢",
        "date": "2026年4月30日"
    },
    "4401-027": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "叶海兵",
        "rec2026": "黄桢雅",
        "date": "2026年4月26日"
    },
    "4401-028": {
        "status": "已完成",
        "investigator": "李旭坤",
        "inv2026": "李旭坤",
        "rec2026": "文舒晴",
        "date": "2026年5月10日"
    },
    "4401-029": {
        "status": "未认领",
        "investigator": "刘星池",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-030": {
        "status": "已完成",
        "investigator": "谢海莹",
        "inv2026": "谢海莹",
        "rec2026": "肖颖",
        "date": "2026年5月4日"
    },
    "4401-031": {
        "status": "未认领",
        "investigator": "陈桧华",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-032": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "冯炳昌",
        "rec2026": "陈金珍",
        "date": "2026年5月1日"
    },
    "4401-033": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "邱童",
        "rec2026": "董晓燃",
        "date": "2026年4月26日"
    },
    "4401-034": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-035": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-036": {
        "status": "未认领",
        "investigator": "刘瑾青",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-037": {
        "status": "已完成",
        "investigator": "刘瑾青",
        "inv2026": "刘瑾青",
        "rec2026": "贺文雄",
        "date": "2026年5月13日"
    },
    "4401-038": {
        "status": "未认领",
        "investigator": "江泳",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-039": {
        "status": "已完成",
        "investigator": "郑炜",
        "inv2026": "郑炜",
        "rec2026": "郑文郗",
        "date": "2026年5月2日"
    },
    "4401-040": {
        "status": "未认领",
        "investigator": "江泳",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-041": {
        "status": "未认领",
        "investigator": "梁周子涵",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-042": {
        "status": "未认领",
        "investigator": "郭布衣",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-043": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "黄建粤",
        "rec2026": "陈秋燕",
        "date": "2026年5月10日"
    },
    "4401-044": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "邱童",
        "rec2026": "董晓燃",
        "date": "2026年5月1日"
    },
    "4401-045": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "王彬",
        "rec2026": "赵家宏",
        "date": "2026年5月6日"
    },
    "4401-046": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-047": {
        "status": "待调查",
        "investigator": "刘瑾青",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-048": {
        "status": "未认领",
        "investigator": "郑炜",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-049": {
        "status": "未认领",
        "investigator": "宋勇",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-050": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "梁颖琳",
        "rec2026": "吴宪",
        "date": "2026年5月1日"
    },
    "4401-051": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "袁翊朗",
        "rec2026": "刘咪咪",
        "date": "2026年5月4日"
    },
    "4401-052": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "杨柏骅",
        "rec2026": "黄凯骐",
        "date": "2026年5月1日"
    },
    "4401-053": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-054": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-055": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-056": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "江舸",
        "rec2026": "余美群",
        "date": "2026年5月1日"
    },
    "4401-057": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "郭布衣",
        "rec2026": "王培珍",
        "date": "2026年4月26日"
    },
    "4401-058": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "陈玥彤",
        "rec2026": "冯炳昌",
        "date": "2026年4月26日"
    },
    "4401-059": {
        "status": "未认领",
        "investigator": "江泳",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-060": {
        "status": "未认领",
        "investigator": "宋勇",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-061": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "叶海兵",
        "rec2026": "孔璇敏",
        "date": "2026年5月5日"
    },
    "4401-062": {
        "status": "未认领",
        "investigator": "郭布衣",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-063": {
        "status": "未认领",
        "investigator": "谢海莹、郭布衣",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-064": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-065": {
        "status": "待调查",
        "investigator": "",
        "inv2026": "刘韵莉",
        "rec2026": "汤立群",
        "date": ""
    },
    "4401-066": {
        "status": "未认领",
        "investigator": "江泳",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-067": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "陈培涛",
        "rec2026": "王雨佳",
        "date": "2026年4月26日"
    },
    "4401-068": {
        "status": "未认领",
        "investigator": "江泳",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-069": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "严笑芬",
        "rec2026": "龙茹丹",
        "date": "2026年5月8日"
    },
    "4401-070": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-071": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "熊之",
        "rec2026": "冯嘉良",
        "date": "2026年5月2日"
    },
    "4401-072": {
        "status": "已完成",
        "investigator": "赖灶芳",
        "inv2026": "赖灶芳",
        "rec2026": "罗海燕",
        "date": "2026年5月3日"
    },
    "4401-073": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-074": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "陈彤",
        "rec2026": "徐建敏",
        "date": "2026年5月3日"
    },
    "4401-075": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-076": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "连科",
        "rec2026": "王珂",
        "date": "2026年5月2日"
    },
    "4401-077": {
        "status": "待调查",
        "investigator": "",
        "inv2026": "黎雨葳",
        "rec2026": "赵楚君",
        "date": ""
    },
    "4401-078": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-079": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-080": {
        "status": "未认领",
        "investigator": "",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-081": {
        "status": "未认领",
        "investigator": "江泳",
        "inv2026": "",
        "rec2026": "",
        "date": ""
    },
    "4401-082": {
        "status": "已完成",
        "investigator": "",
        "inv2026": "严笑芬",
        "rec2026": "龙茹丹",
        "date": "2026年5月7日"
    }
};

// pages/resultPage/resultPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  //卡牌名
    cardName: {
      "1": "魔术师 The Magician", 
      "2": "女祭司 The High Priestess", 
      "3":"皇后 The Empress",
      "4": "皇帝 The Emperor",
      "5": "教皇 The Hierophant", 
      "6": "恋人 The Lovers", 
      "7": "战车 The Chariot", 
      "8": "力量 Strength", 
      "9": "隐士 The Hermit", 
      "10": "命运之轮 Wheel Of Fortune",       
      "11":"正义 Justice",
      "12": "倒吊者 The Hanged Man", 
      "13": "死神 Death", 
      "14": "节制 Temperance", 
      "15": "恶魔 The Devil", 
      "16": "高塔 The Tower", 
      "17": "星星 The Stars", 
      "18": "月亮 The Moon", 
      "19": "太阳 The Sun", 
      "20": "审判 Judgement", 
      "21": "世界 The World", 
      "22": "愚人 The Fool "
  
  },

    //卡牌名
    cardNickName: {
      "1": "",
      "2": "别  名：女教皇 The Papess ",
      "3": "",
      "4": "",
      "5": "别 名：主教 The Pope",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "16": "",
      "17": "",
      "18": "",
      "19": "",
      "20": "别 名：天使 Angle",
      "21": "",
      "22": ""

    },  

  //卡牌关键字
    cardKeyword: {
      "1": "沟通、学习、交流",
      "2": "等待、理性、消极、静止",
      "3":"高贵、热情、丰收",
      "4": "开创、竞争、权力",
      "5": "宗教、传统仪式、权威",
      "6": "选择、爱情、罗曼蒂克",
      "7": "保护、防御、安全感",
      "8": "意志、自律、胜利、",  
      "9": "谨慎、内敛、自省、",
      "10": "契机、进展、运气",
      "11": "公正、均衡、法律",
      "12": "牺牲、等待、以退为进",
      "13": "结束、转变、关口、蜕变",
      "14": "协调、配合、节制、净化",
      "15": "欲望、束缚、沉溺、物质",
      "16": "死亡、毁灭、结束",
      "17": "希望、祝福、远方",
      "18": "不安、多变、忧郁、情绪化",
      "19": "纯真、智慧、创造力",
      "20": "衡量、审判、结果",
      "21": "起点及终点、远方、自由",
      "22": "开始、大胆、好奇、旅行"      

  },
  //卡牌星座
  cardZodiac:{
    "1": "水星",
    "2": "月亮",
    "3": "金星",
    "4": "牧羊座",
    "5": "金牛座",
    "6": "双子座",
    "7": "巨蟹座",
    "8": "狮子座",  
    "9": "处女座",
    "10": "木星",
    "11": "天秤座",
    "12": "海王星",
    "13": "天蝎座",
    "14": "射手座",
    "15": "摩羯座",
    "16": "火星",
    "17": "水瓶座",
    "18": "双鱼座",
    "19": "太阳",
    "20": "冥王星",
    "21": "土星",
    "22": "天王星"       
  
  },


  //卡牌四元素
  cardElement: {
    "1": "风",
    "2": "水",
    "3": "土",
    "4": "火",
    "5": "土",
    "6": "风",
    "7": "水",
    "8": "火",
    "9": "土",
    "10": "火",
    "11": "风",
    "12": "水",
    "13": "水",
    "14": "火",
    "15": "土",
    "16": "火",
    "17": "风",
    "18": "水",
    "19": "火",
    "20": "水",
    "21": "土",
    "22": "风"        
     },


  //牌面象征
  cardSyble: {
    "1":"魔术师代表我们的智慧之光，拥有聪明的头脑，懂得善加发挥自己的能力，来掌握自己的命运，活出多采多姿的人生。因此，魔术师会积极学习各种技巧，善加运用周围环境的资源，来获得比别人更加优秀的人脉和知识。他拥有自信心，就算遇到麻烦的问题和困难的挑战，也不会轻易退却，反而会用强大的自信心，来想清楚解决问题的对策，并且采取行动来排除各种阻碍。此外，魔术师也拥有水星的表达能力，擅长沟通的艺术，可以成功说服别人。",
    "2": "女祭司代表我们深层潜意识的灵性直觉，她喜欢静静一个人体会内心的感受，不想受到别人的打扰。女祭司具有了解生命奥秘的兴趣，可能会藉由静心冥想，来获得神秘的生命感受。因此，女祭司懂得沈淀自己的浮动情绪，建立平静的心情，得到心灵的满足。女祭司也拥有一股沈静的心灵力量，可以安抚别人的情绪，治疗别人的情感伤害。对于自己的事情，她可以静静等候事情的自然发生，不会急着干预事情的进行方向。对于别人的事情，也具有倾听的兴趣，可以提供别人适当的建议和咨询。",
    "3":"女皇代表我们热爱生命的女性情感，从照顾子女的母性情操、男女愉快互动的爱情到享受生命美好的陶醉情绪，都属于女性温暖的情感流露。因此，女皇很注重爱情、婚姻和家族，希望大家活得很幸福，可以经常热闹的相聚在一起。女皇也具有丰富的生活创意，可能表现在美化自己的生活环境上面，或是表现在对物质的享受上面。", 
    "4": "一国之尊的皇帝头戴皇冠，身着红袍，足蹬象征严格纪律的战靴，自信满满的端坐在宝座上。他左手拿着一个水晶球，象征秩序严谨有条，右手则握着一个法杖，象征生命与权力。在王座上有四个牧羊头浮雕，强调了皇帝牌所对应的星相——牧羊座（火星），作为十二星座之首，这里的牧羊头像也象征着勇敢、积极、野心和自信，并与全牌呈现的红色的主色调不谋而合。背景严峻的山峦预示着权力背后的风险。",
    "5": "教皇要沈淀皇帝的权力支配和稳定皇帝的火性能量，使教皇所灌输的理念可使人民更加听从皇帝的规定。教皇跟女祭司一样是灵性教师，会提供教导教化人民的作用，包括服务、演说、教义大会，让你形成个人的哲学信念。教皇作为神与人之间的桥梁，不只传授传统的宗教教条，也会引导每个人去遭遇和面对神圣。",
    "6": "当性驱力从深层本能变得明显化之后，每个人就开始脱离家庭，变成比较独立的个人，寻求未来的伴侣。恋人就是代表从家庭脱离出来，寻求伴侣的开始。当我们了解自己的内在不完整时，就可得到深层的男女互动体验",
    "7": "一位头戴八芒星战盔、身着盔甲的勇士驾着一辆由两只狮身人面兽拉着的战车，向着胜利勇往直前，气势无人可挡。车前左侧的黑色狮身人面兽代表严厉，而右侧的 白色狮身人面兽则代表慈悲，双手并行，恰恰预示了阴阳调和，即追求胜利的前提——平衡。作为塔罗牌中的第7号牌，站车似乎预示了走过了三分之一旅程的愚人已经变成了 一名成熟、勇敢的战士，在追求胜利中披荆斩棘、奋勇向前。",
    "8": "与魔术师一样，力量女神的头顶也有一个无限大符号，预示其无穷无尽的力量。但与魔术师不同，女神的力量似乎没有魔术师得凌厉，而是透着一丝怜悯和包容。她带着怜悯的目光，用看似柔弱的双手轻轻合上雄狮的嘴，轻而易举的压制了百兽之王狮子的兽性。女神眼中的怜悯，似乎是在同情狮子的兽性，而象征征服的百兽之王在女神冷静慈悲的目光下也变得温顺可亲。或许，一颗宽容的心才是力量真正的来源吧！",
    "9": "一位老者身披灰色斗篷站在冰天雪地的山颠，手提一盏油灯，好像是在低头沉思。那看似微弱的灯光，在渺无人烟的暗淡雪夜中，显得有些无助，但对老者而言，那是真理、也是希望。此时，经过无知、热忱、繁华之后，变得确实如此的普通，正应了中国那句“返璞归真”的老话。老者人手这独处的孤寂，反省着自己的过去，跟随真理之灯的指引，暗示了寻求真理道路上的艰辛、朴素，预示了只有以开阔的胸怀认知世事，以不断反省的态度探知真我，方能求得正果。",
    "10": "蔚蓝的天空中悬挂着命运之轮，与圣职者的三层投管相通，命运之轮也是有三层组成。最里面的圆中没有任何符号，代表空无，象征万物的创造；中间的圆上有四个炼金符号，对应西方物质构成的四要素，象征了万物的形成；最外面的圆中上刻着“TAROT”字样，象征已经创造的世界。轮盘的左侧是埃及神话中的邪恶之神，蛇头朝下预示着人生中的沉沦；而背负着命运之轮的阿努比斯，则预示了背负命运的渴望；至于命运之轮顶部的是狮身人面像，据说是智慧的象征，其手中的宝剑则代表思考，或许实在说面对人生，思索真谛是获取顺境的方法。牌图的四角分别是狮子、飞鹰、天使和神牛恰恰应征了命运之轮中间那个圆上的符号，即四要素的火、水、风、土。",
    "11": "冥想中的正义女神，身着红袍、头戴金冠，端坐在石凳上。她左手提着天秤象征能对一切是非做出公正的裁决；右手高举利剑则寓意矫正世间一切歪曲与虚伪的能力。女神左脚微微向外踏出，似乎想要站起，但右脚却还隐匿在袍中，似乎是在为做出公正裁决而犹豫不决，预示想要维系公正的判断绝非易事，只有适当的协调他人与自我的对立，时时洞察反省自我，利器与天秤才能发挥其真正的意义。" ,
    "12": "一名男子双手反绑，被人倒吊在T字型的树干上。男子反绑的双手呈三角，双腿交织成十字，拼在一起恰恰形成了西方炼金术中的一个炼金符号，预示着伟大事业的 完成，同时也暗含了由低层欲望向道德升华的过程。由上至下色彩的变幻（红色的外裤、蓝色的上衣和金色的光环）与圣职者的三层头冠以及命运之轮中的三个同心 圆相呼应，依次对应身、心、灵三层境界，只是顺序导致的视角，强调了换位思考的意义。而脚上金色的鞋子不仅表明了倒吊者崇高的牺牲精神，也预示了灵（即道德）的地位，即便是换位思考，道德永远是第一位的。",
    "13": "死神坐骑白马，高高在上，俯视地上的生灵，在他的手中高举一面绘有蔷薇十字会图腾的黑色旗帜。有人说这个图腾代表死后获得新生的过程，也有人说这个图腾与火星相应代表不朽生命力。在死神的马下，分别是国王、圣职者、妇女和儿童，代表终生对死亡的四种看法。四个人，四种心态，无论是抗拒、崇敬、恐慌还是无知，都在阐述这相同的道理——无论是富贵还是贫穷、无论是男女老少，死亡都是一种不可抗拒 的自然现象，无法逃避，也无需逃避。",
    "14": "一名天使正在将代表灵魂与生命的水从一个圣杯倒向另一个圣杯。有人说，右手圣杯中的水代表意识，而左手中的代表无意识，也有人说它们分别代表物质与精神。 但是无论如何，至少我们在牌图中看到了一种交互，无论水从哪里来，到哪里去，水都在流，而流动不正是一种调和与净化吗？天使一只脚站在水中，一只脚站在岸上。按照西方文化水代表内心的精神世界，土地则代表着外界的物质世界，那么天使如此站立恰恰预示了我们在物质与精神两个世界徘徊的人生，而以水中之足为实，岸地为虚，则恰扣主题，暗示人们节制欲望、净化心灵。",
    "15": "大阿尔卡那的恶魔在沟通和内容上与第6张恋人相互辉映，只是天使变成了恶魔，浪漫的爱情沦为彼此对欲望的沉迷。此时亚当和夏娃由于对欲望的沉迷，再也无法 听到天使的祝福，耳边只有来自地狱恶魔的诅咒，原有的浪漫与温馨也已变成了彼此的束缚，就像彼此颈上的枷锁，将彼此牢牢地拴在恶魔的脚下。亚当一如既往的 注视着夏娃，而夏娃则低垂粉颈，无奈地看着颈上的铁条。原有物质、精神、道德的循环已被颠覆，剩下的仅是对物质和欲望的沉迷.",
    "16": "塔高高耸入天空中，突入起来的闪电将高塔击碎。高塔上的人从高空坠落，灾难的爆发即将来临，猝不及防。高塔的牌义甚至比恶魔和死神更令人恐惧，它代表的是剧烈的变动。",
    "17": "夜空中一大七小八颗星星，其中那颗大的据说是天狼星，可以为那些寻求帮助的人带去希望和信心。可以说，星星是一张给人们带去希望的牌，预示着寓言的兑现和灵感与精神的互动，暗示人们不应放弃希望，只有自信、自尊、自强才能有所成就。",
    "18": "月亮高挂在夜空之中，圆缺不定。月中隐约有一张愁苦的面容，带给人忧郁不安的感觉。月下有两只狗（也有人说是一只狼、一只狗）正在仰望月空低吠，似乎是体 会到月亮的愁苦而报以同情，诱惑是向像月亮问着什么。池中的蝎子似乎很向往月宫的样子，努力爬出水面，正准备沿着黄色弯曲的小路前往自己向往已久的地方。 整个牌图除了月亮和蝎子外，基本成对称结构，有一条蜿蜒的小路分开，据说代表人生理想与现实两个层面，而蝎子为了实现自己的梦想，必须在理想与现实中徘徊 前行，稍有偏差便很难达成目的。而月亮中那张愁苦不安的面孔，似乎是对前行中蝎子的内心映照吧！",
    "19": "一名满脸稚气、面带笑容的孩子骑在马背上，从灰色的围墙中一跃而出，预示着逃脱束缚、奔向自由。孩子的头上有一个雏菊花环和一根似曾相识的羽毛，与愚人和死神头上的那根一模一样，据说象征超越死亡和重获新生。在灰色的围墙后面种满了金灿灿的向日葵，似乎是一座人造花园。但孩子似乎对这些人造的美景并无兴趣，而是选择了奔向那天然毫无修饰的世界，就像是他裸露的身体一样，真实、自然、纯真。四朵向日葵都面向孩子而非太阳，似乎是在告诉我们纯净、自然、真实的个体凌驾于太阳之上，是一种远远超越权力和财富的境界，同时也是快乐的源泉，就像孩子脸上洋溢出的喜悦。",
    "20": "天使吹响了号角，传播着上天的福音。在声声催人振奋的号角中，沉睡已久的灵魂一个个走出了自己内心的坟墓，或者说是内心的困惑，站立在天使的翅膀下，满怀 感恩的心，细心聆听着上天的福音。审判是大阿尔卡那的倒数第二张牌，可以说是对大阿尔卡那前二十张人生旅程的一个回顾和自省，在超越自我认知最终的世界之 前，反省自己的过去，进行自我剖析，认清并且洗涤自己曾经的错，坚信曾经的对，才能最终走向成功之门。",
    "21": "世界代表宇宙的重点，与大阿尔卡那得第10张命运之轮相呼应，四方依然是狮子、飞鹰、天使和神牛，只是中间不再是命运之轮，而是一个 在月桂花环中跳舞的少女。她一手拿着一个魔杖，又好像是一把钥匙，正在为步入重点地人喝彩，又或是一种召唤，在引导胜利者走到智慧之门面前，接过他手中开 启幸福的钥匙。世界是大阿尔卡那人生旅途的重点，也是一个新的开始，因为进入智慧之门，你又会变回愚人，为找寻新的智慧或是人生目标而奋斗。",
    "22": "愚者代表我们人生初期的天真童心，拥有自由自在的玩乐心情，能够放松自己，尽情享受生活的喜悦，不会对于现实问题抱有太多的顾虑担忧。因此，愚者具有自动自发的冒险精神，喜欢掌握新的人生机会，开发新的人生经历，让自己获得更多新的生命体会。愚者也具有开放的心态，对于自己遇到的人事物，不会抱有太多的成见和偏见。因此，愚者可以发挥自己的好奇心，学习这个世界上层出不穷的新事物。愚者也代表我们人生后期反璞归真的境界，对于爱情事业人生不再有过多的期待，而能回归单纯的生活，非常知足乐天。",
    },

  //牌面含义 小于22为正面，后面的是号码 - 22. 第0张移动到第22张。
  cardMean: {
    "1": "基本含义——受好奇心驱使展开调查研究、具有独创性、具备发展潜力、展开新的计划并获得成功、幸福的开始。 \n  \n 恋爱婚姻——心有灵犀一点通、新恋情的展开、备受异性欢迎、彼此的性格结得以发挥、彼此配合默契、品尝爱情的喜悦、轻率的交往、变更约会地点和方式可以令彼此保持新鲜感。 \n  \n 工作学业——以新的方式读书获得好的成绩、事务处理得当、高效计划、注重细节、能够充分发挥自己所学、创意得到旁人认同、适合艺术方面的工作、喜欢充满创新的工作、适合从事技术人员、播音员、大众传媒等相关工作或艺术设计工作。 \n  \n 人际财富——结交更多的朋友、寻得良师益友、寻得彼此互补的合作对象、能够以合理的代价获得想要的东西。 \n  \n 健康生活——精神状态稳定、适合知性的装扮。 \n  \n 其  它——喜欢阅读并从中获得知识和快乐、可能会有短期的履行、对语言学习颇有兴趣、适合郊外野餐、拥有敏捷的运动神经、适合参加辩论会、善于模仿并因此获益、处事机灵善变、事事顺利。",
    "2": "基本含义——有良知的、文静的、知性的、具备敏锐的洞察力、理性的、富有研究精神、有正确的时机或人将出现的预感。 \n  \n 恋爱婚姻——理智的感情生活、柏拉图式的恋情、精神方面的结合、能够消除烦恼的对象、深藏内心的爱意、介于友人与恋人之间的关系、以诗篇或文章来表达爱意。 \n  \n 工作学业——负有责任感、目标明确、苦心钻研、拥有展现自身潜力的机会、求知欲旺盛、考运佳、具备评论才能、适合从事与教育相关的职业。 \n  \n 人际财富——能互相谅解的挚友、良好的商洽对象、能够较新的朋友、体贴的好友、理性消费、善于理财。 \n  \n 健康生活——着装朴素简洁、善待身体、注重自身卫生、体力出众且深藏不露。 \n  \n 其  它——制作手工艺品、知性的娱乐方式、脑力游戏、无须外出的活动方式、出众的理解力、同冷静的女性商洽可获得新知、善于洞悉他人。",
    "3": "基本含义——优雅的生活、有艺术天分、丰收、繁荣昌盛、富足、善于营造气氛。 \n  \n 恋爱婚姻——有收获的恋情、谈婚论嫁、成为异性瞩目的焦点、轻松的交往、令男性钦佩的女强人、富有母性的光辉。 \n  \n 工作学业——成绩进步、考试成绩优秀、在艺术领域颇有收获、适合服装服饰相关行业、体面的工作、女强人。 \n  \n 人际财富——因性格开朗赢得旁人好感、受人瞩目、成为聚会或派对的主角、获得意外之财。 \n  \n 健康生活——体力充沛、多产、气质佳、风度翩翩、对时尚服饰颇为偏爱。 \n  \n 其  它——喜爱逛街购物、喜爱郊游派对等集体活动。",
    "4": "基本含义——优雅的生活、有艺术天分、丰收、繁荣昌盛、富足、善于营造气氛。 \n  \n 恋爱婚姻——有收获的恋情、谈婚论嫁、成为异性瞩目的焦点、轻松的交往、令男性钦佩的女强人、富有母性的光辉。 \n  \n 工作学业——成绩进步、考试成绩优秀、在艺术领域颇有收获、适合服装服饰相关行业、体面的工作、女强人。 \n  \n 人际财富——因性格开朗赢得旁人好感、受人瞩目、成为聚会或派对的主角、获得意外之财。 \n  \n 健康生活——体力充沛、多产、气质佳、风度翩翩、对时尚服饰颇为偏爱。 \n  \n 其  它——喜爱逛街购物、喜爱郊游派对等集体活动。",
    "5": "基本含义——值得信赖的、得到援助的、良好的建言者、有贡献的、心胸宽广的、有宗教情绪的。  \n  \n 恋爱婚姻——值得信赖的恋人、对恋情持谨慎态度、博爱、婚嫁、良缘、有媒人牵线搭桥、能够安全交往的对象、年长的异性、逐渐加深的恋情、长久持续的交往。 \n  \n 工作学业——多听他人的劝告、遇到良师致使成绩进步、会出现对自己有帮助的人、与学长或同学一起用功而获益、耐力十足、思想保守、适合顾问或医学工作以及以谈话为主的工作。 \n  \n 人际财富——获得学长的建言、获得父母的资助、事事为朋友着想、容易遗失钱包。 \n  \n 健康生活——有遇到好医生的机会、化妆时偏重于嘴唇会带来好运、口红适合使用粉色系。 \n  \n 其 它——观赏音乐会或看电影、前往寺庙上香许愿、拥抱自然。",
    "6": "基本含义——幸福的相遇、同心协力、情投意合、感情丰富、前途光明、坠入爱河、整理思绪。 \n  \n 恋爱婚姻——在团体活动中结识进而结为连理、经友人介绍相识相恋、步入结婚殿堂、有朋友成为恋人、自由愉快的交往。 \n  \n 工作学业——遇到决定前途的大好机会、以团队协作获得成功、敏锐的观察力、出现好帮手，喜欢的科目成绩优异、擅长文科或艺术类科目、因互学互助成绩有所提高。 \n  \n 人际财富——没有财务烦恼，出现好的伙伴、人际关系良好、社团活动顺利、朋友增加、与他人易于亲近、活泼开朗幽默。 \n  \n 健康生活——多与好友抒怀畅谈有益缓解压力，着装缺少时尚元素。 \n  \n 其 他——愉快的短暂履行、愉快的郊游会带来好运。",
    "7": "基本含义——值得信赖的、得到援助的、良好的建言者、有贡献的、心胸宽广的、有宗教情绪的。 \n  \n 恋爱婚姻——值得信赖的恋人、对恋情持谨慎态度、博爱、婚嫁、良缘、有媒人牵线搭桥、能够安全交往的对象、年长的异性、逐渐加深的恋情、长久持续的交往。 \n  \n 工作学业——多听他人的劝告、遇到良师致使成绩进步、会出现对自己有帮助的人、与学长或同学一起用功而获益、耐力十足、思想保守、适合顾问或医学工作以及以谈话为主的工作。 \n  \n 人际财富——获得学长的建言、获得父母的资助、事事为朋友着想、容易遗失钱包。 \n  \n 健康生活——有遇到好医生的机会、化妆时偏重于嘴唇会带来好运、口红适合使用粉色系。 \n  \n 其 它——观赏音乐会或看电影、前往寺庙上香许愿、拥抱自然。",
    "8": "基本含义——值得信赖的、得到援助的、良好的建言者、有贡献的、心胸宽广的、有宗教情绪的。 \n  \n 恋爱婚姻——值得信赖的恋人、对恋情持谨慎态度、博爱、婚嫁、良缘、有媒人牵线搭桥、能够安全交往的对象、年长的异性、逐渐加深的恋情、长久持续的交往。 \n  \n 工作学业——多听他人的劝告、遇到良师致使成绩进步、会出现对自己有帮助的人、与学长或同学一起用功而获益、耐力十足、思想保守、适合顾问或医学工作以及以谈话为主的工作。 \n  \n 人际财富——获得学长的建言、获得父母的资助、事事为朋友着想、容易遗失钱包。 \n  \n 健康生活——有遇到好医生的机会、化妆时偏重于嘴唇会带来好运、口红适合使用粉色系。 \n  \n 其 它——观赏音乐会或看电影、前往寺庙上香许愿、拥抱自然。",
    "9": "基本含义——自信、理智、脚踏实地、不喜形于色、中肯的建议、坚持不懈、沉着冷静、闭门静思养精蓄锐。 \n  \n 恋爱婚姻——暗恋、追求精神层次的结合、永久的恋情、值得信赖的对象、理性的爱恋。 \n  \n 工作学业——努力奋斗必将成功、拟订长期计划、注重细节、杰出的分析能力、追求稳定的工作状态、获得正确的检验、勤勉、遵守规则、一板一眼。 \n  \n 人际财富——开源节流，有自知之明、以礼待人、因内敛受人信赖、肯纳忠言。 \n  \n 健康生活——情绪平和、天然食物有益健康。 \n  \n 其 他——书法、对弈、郊游、拟定计划、写日记。",
    "10": "基本含义——把控时机、机会降临、转变期、意外的收获、当机立断、幸运降临、恢复原状。 \n  \n 恋爱婚姻——命运的邂逅、一见钟情、遇到新的心仪对象、突然告白。 \n  \n 工作学业——好运来临、确定前途、意外的好消息、弹性的计划、会得他人援助，改变学习方式将会有所收益、意外的好消息、弹性的计划、考运佳、得他人援助。 \n  \n 人际财富——临时的收入、意外之财，意外得到贵人相助、面对世事能随机应变、社交环境有利。 健康生活——性情转好、疾病痊愈。 \n  \n 其 他——摄影、绘画、受兴趣影响较大、获得机会、立即行动。",    
    "11": "基本含义——诚实、公证、为他人调解争端、维系平衡、兼顾事业与家庭（学业与恋情）、爱好和平。 \n  \n 恋爱婚姻——理性交往、好性情、喝温文有力的对象交往、恋爱双方彼此平衡、轻松的交往、诚实的恋情、真心的交往、学业与恋情兼顾。 \n  \n 工作学业——各科成绩出众、事业与家庭兼顾、以合理的计划获得成功、个人学业与社团活动兼顾、适合法律相关工作。 \n  \n 人际财富——公平待人、适合担任解决争端的角色、重义气、受到交往对象的照顾、贷款获准、财运攀升、得到应有的回报。 \n  \n 健康生活——身材匀称、精神状态稳定、适合情人装打扮。 \n  \n 娱乐兴趣——音乐相关的事物能够开拓心情。",
    "12": "基本含义——进退两难、牺牲、因祸得福、遭遇困难磨练以致心智成熟、以不同的角度看待事物。 恋爱婚姻——误解越解释越深、奉献式的爱情、爱情换位思考、禁得起考验的爱情、为对方的幸福而放弃爱情。 \n  \n 工作学业——努力就会成功、适合福利或义务性的工作、换位思考有助于攻克难题。 \n  \n 人际财富——花钱消灾、因助人损失金钱，经常扮演吃亏的角色、人际处境较为艰苦。 \n  \n 健康生活——需要长时间的调养恢复健康、面对疾病勇敢坚强。 \n  \n 其 他——重新审视自己和周边的事物、坚持就是胜利。",
    "13": "基本含义——失败、厄运连连、走进死胡同、绝望、遗失、无法逃离、无疾而终、努力成为泡影、有苦说不出。 \n  \n 恋爱婚姻——彼此隔阂加深、分手、失恋、分居、离异、对恋人失去感觉。 \n  \n 工作学业——工作业绩下滑、项目毫无进展、面对瓶颈感到后继无力、一切呈停滞状态、被炒鱿鱼，成绩跌入低谷、考试不顺利、学业停滞不前、对学业不抱希望。 \n  \n 人际财富——奢靡成性、盲目购物、随性挥霍，与朋友关系恶化、友情出现裂痕、忧郁自毙、朋友逝世或远行。 \n  \n 健康生活——遭遇意外灾祸、无视自身健康。 \n  \n 其 他——对周边事物毫无兴趣、厌世、遭遇窘境、一切华为泡影、哑巴吃黄连有苦说不出。",
    "14": "基本含义——进展顺利、为他人排解争端、整理思路与情绪、净化心灵、反复调研找寻关键所在、关注自我需求的同时兼顾他人意愿、勤于节俭、相互协助。 \n  \n 恋爱婚姻——爱情弥坚、心有灵犀一点通、纯真的恋情、有节制的交往、意外的邂逅、有友谊展开的爱恋、可以商谈的对象。 \n  \n 工作学业——直觉敏锐、成绩顺利进展、反复温习是成绩显著提高、稳定的工作状态、从新修订商品价格、出众的记忆力、遭遇人事变动。 \n  \n 人际财富——在流动的资金中获得收益，能够与三教九流相处、在交际场上得获收益、与朋友结交毫不做作、对朋友关怀有加体贴入微。 \n  \n 健康生活——身体处于良好状态、善于自我调节身体机能、皮肤保养良好。 \n  \n 其 他——游泳、前往有水的地方旅游、于体验中修身养性。",
    "15": "基本含义——受到拘束深感不自在、卑躬屈膝、沦为与王的俘虏、颓废的生活、隐瞒事实真相、遭遇诱惑的陷阱、固执己见、贪婪成性。 \n  \n 恋爱婚姻——无法真实的再现自己、地下恋情、拖泥带水的孽缘、占有欲过强、感情被人玩弄、沉迷于肉欲。 \n  \n 工作学业——被同事孤立、工作受到束缚、对己对人过于苛刻、对下属暴力训斥、对上司感到不满，因诱惑而荒废学业、成绩低落、对师长的说教颇感不满、被迫用功、秉烛夜读成绩却无法提高。 \n  \n 人际财富——被骗财、非法或不道德收入、背负债务、股票被套牢、财运低迷，受到不良的诱惑、结交狐朋狗友、不慎加入秘密团体、家教甚严以致交际受到束缚。 \n  \n 健康生活——挥之不去的隐痛。 \n  \n 其 他——身心受到束缚、计划赶不上变化、精神压抑、外部环境恶劣、隐秘的行动。",
    "16": "基本含义——受到拘束深感不自在、卑躬屈膝、沦为与王的俘虏、颓废的生活、隐瞒事实真相、遭遇诱惑的陷阱、固执己见、贪婪成性。 \n  \n 恋爱婚姻——无法真实的再现自己、地下恋情、拖泥带水的孽缘、占有欲过强、感情被人玩弄、沉迷于肉欲。 \n  \n 工作学业——被同事孤立、工作受到束缚、对己对人过于苛刻、对下属暴力训斥、对上司感到不满，因诱惑而荒废学业、成绩低落、对师长的说教颇感不满、被迫用功、秉烛夜读成绩却无法提高。 \n  \n 人际财富——被骗财、非法或不道德收入、背负债务、股票被套牢、财运低迷，受到不良的诱惑、结交狐朋狗友、不慎加入秘密团体、家教甚严以致交际受到束缚。 \n  \n 健康生活——挥之不去的隐痛。 \n  \n 其 他——身心受到束缚、计划赶不上变化、精神压抑、外部环境恶劣、隐秘的行动。",
    "17": "基本含义——愿望的以实现、充满创造力、萌发灵感、理想主义者、前景光明。 \n  \n 恋爱婚姻——遇到理想的恋人、从友人转为恋人、迸发爱的火花。 \n  \n 工作学业——有独特的创造性、前景乐观、能达到极高的目标、事业蒸蒸日上，学业前景乐观、对课业充满好奇心、因独特的读书方式受益。 \n  \n 人际财富——新的财源、凭直觉或可获得意外的收入，与兴趣相交的朋友愉快交往、相辅相成的友谊、遇到理想的朋友。 \n  \n 健康生活——身体状况绝佳。 \n  \n 其 他——适合前往生态环境良好的地区、对文化古迹略感兴趣、偏爱艺术、获取专利。",
    "18": "基本含义——幻想、谎言、不安、动摇、迷惑、暧昧不清、重伤他人或为人中伤、顾及左右有柔寡淡、受人感化、无法发挥潜能。 \n \n 恋爱婚姻——暧昧不清的恋情、虚伪的恋情、孽缘、三角恋、遭遇背叛、为流言所困。 \n \n 工作学业——被小人中伤、目标不明、遭遇欺骗、适合于夜生活有关的工作、事业有成却无法满足、成绩低迷、考试时心神不宁致使失败。 \n \n 人际财富——私房钱可暂缓财务危机、令人不安的经济状况、因被欺诈失财，被他人中伤、易遭欺骗、被恶言中伤、被人误会。 \n \n 健康生活——心烦意乱、精疲力竭、面对小疾而心情沉重、遭遇错误的诊断。 \n \n 其 他——内心隐隐感到不安、夜晚独处倍感孤寂。",
    "19": "基本含义——前景明朗、活力充沛、欲望胜、得贵人相助、阳光普照。 \n \n 恋爱婚姻——彼此恩爱有加、得到亲朋的祝福、步入婚礼殿堂、梦中情人出现、恋情公开、彼此感情日渐亲密。 \n \n 工作学业——目标达成、积极主动、得遇名师、工作环境明朗、实力得以充分发挥、竭尽全力终获成功，面对课业积极上进、成绩快速进步、考试顺利。 \n \n 人际财富——储蓄增加、有意外之财、财运鼎盛，友谊地久天长、与朋友关系日渐亲密、好友增加、积极的交往。 \n \n 健康生活——体力充沛、顽强的生命力、身体康健。 \n \n 其 他——适合户外活动、呼吸新鲜空气可以愉悦心情、怀孕、生活充实。",
    "20": "基本含义——复活的喜悦、命运好转、作品公开发表、得到好消息、信奉宗教、自信。 \n \n 恋爱婚姻——真心的恋情、感情公开、即使发生争执仍有和好的希望、爱的使者出现、破镜重圆、深信爱的奇迹。 \n \n 工作学业——有复职的可能、事业脱离窘境、岗位变更、升迁、适合于音乐相关的工作，考试顺利、学业更上一层楼、临阵磨枪不快也光、成绩优异。 \n \n 人际财富——财物失而复得、获得意外之财，友情的裂痕得以修复、备受他人赞许、与多年老友取得联系、与旧友言归于好、与他人建立彼此信赖的关系。 \n \n 健康生活——借旅行净化身心、借音乐舒缓心情、休养生息。 \n \n 其 他——旅游可以放松最近疲惫的身心、音乐可以帮你减轻疲劳、退一步海阔天空、自信的演讲。",
    "21": "基本含义——原望达成、精神高昂、幸福时光、达到巅峰、到达目的地、获得成功。 \n \n 恋爱婚姻——得到祝福的婚姻、最佳伴侣、婚姻美满、永恒的爱恋。 \n \n 工作学业——事业鼎盛时期、既定目标得以达成、适合航空航天相关的工作，学业有成、成绩优异、目标达成、考试顺利。 \n \n 人际财富——收入增加、资金运作合理，喜相逢、交友获益、人际关系稳定、备受他人信赖。 健康生活——身体康健、体力充沛、精神烁烁。 \n \n 其 他——梦想成真、适合前往海洋、草原等开阔地旅游、幸福伴随左右。",
    "22": "基本含义——好冒险、寻梦人、不拘泥于传统的观念、自由奔放、一切从基础出发、四处流浪。 \n \n 恋爱婚姻——自由恋爱、不顾及他人看法、以独特的方式获得成功、轻易坠入爱河、浪漫多彩的爱情、独特的恋人、等待交往机会。 \n \n 工作学业——热衷于事业或学业、以独特的方式取得意外的收获、由于好奇心对当前的学业产生浓厚的兴趣、把握重点、寻求捷径、倾向于自由的工作氛围、适合艺术类工作或从事自由职业。 \n \n 人际财富——以轻松的方式交友、于旅途中结交新的朋友、因张显个性受他人欢迎、投资上孤注一掷不计后果。 \n \n 健康生活——寻求独特的保健之法、张显自我的着装方式、适合休闲装或运动装。 \n \n 其  它——没有目的的旅行、憧憬自然的地方、毫无目的地前行、喜欢尝试挑战新鲜事物、四处流浪。",
    "23": "基本含义——犹豫不决、因学艺不精而败北、看待事物过于消极、易受骗上当、遇事光说不练。 \n  \n 恋爱婚姻——不善于向对方表白、缺乏爱情技巧、易受花言巧语者蒙骗、对爱情无法专精、心情过于浮躁、冷酷无情、无法向对方表达心意。 \n  \n 工作学业——预期的成绩没有起色、努力不足、谎言被揭穿、需要改变学习方法、考试失误、成绩退步、工作一成不变。 \n  \n 人际财富——因态度不明确失信于人、虚假的表面敷衍、不够体贴对方、遭遇欺诈、容易乱花钱、因好赌倾家荡产。 \n  \n 健康生活——精神紧张需要休息、情绪暴躁容易激动、呼吸器官或大脑负荷过重、着装不搭调。 \n  \n 其  它——旅行计划取消、遭遇交通堵塞、因懦弱造成竞技失败、不听他人劝告。",
    "24": "基本含义——缺乏理性思维能力、粗心大意、因精神压抑以致歇斯底里、易紧张、神经质、意气用事。 \n  \n 恋爱婚姻——恋情以单相思告终、面对心仪的对象裹足不前、因洁癖错过爱情、憧憬单身生活、因冷漠而产生误会、任性妄为、晚婚、无趣的女性。 \n  \n 工作学业——固执、不能集中全力、认知肤浅、不喜用功、无法学以致用、因状态低落感到焦虑、考试失利、犹豫不决以致错过良机。 \n  \n 人际财富——受到冷落对待、应留心被人中伤、自闭、易因过于激动而得罪人、无计划的消费、浪费成性。 \n  \n 健康生活——精神紧张、不孕症、歇斯底里、错误的减肥计划、贫血、手脚冰凉、心情不佳、因任性而倍感孤独、嘲笑他人、心胸狭隘。 \n  \n 其  它——无心读书、吵闹的环境使得身心倍感疲惫。",
    "25": "基本含义——困惑、缺乏上进心、轻浮、损失、爱慕虚荣。 \n  \n 恋爱婚姻——优柔寡断、没有结果的恋情、因任性妄为令人厌恶、妒火中烧、沉迷恋情无法自拔、缺乏女人味、婚期遥不可及、沉溺在肉欲之中、意外怀孕。 \n  \n 工作学业——弄丢他人笔记、浪费时间、懒惰、对学科过于好恶分明、成绩低落、注意力无法集中。 \n  \n 人际财富——锋芒毕露、过于好面逞强、过于骄纵、包容力欠缺、被他人轻视、爱慕虚荣、浪费成性、投资过剩、不必要的花费。 \n  \n 健康生活——体型过胖、饮食过度、不适宜的浓妆艳抹、多余的装饰。 \n  \n 其  它——处事犹豫不决、爱好颇多无疑从重、谈吐轻浮、金玉其外败絮其中。",
    "26": "基本含义——幼稚、缺乏管理能力、不负责任、任性妄为、蛮横霸道、寡欲。 \n  \n 恋爱婚姻——强迫的恋情、不可靠的对象、无法告白心事、华而不实的恋情、痛苦的结局。 \n  \n 工作学业——不适合久坐工作、缺乏干劲儿、缺乏领导能力、因过于自信而败北、需要从根本检讨以求反败为胜、从头再来。 \n  \n 人际财富——因不负责任被人指责、固执己见、蛮横霸道以致被人厌恶、无法领导他人、死薪水、损失金钱、财务障碍、预算不足。 \n  \n 健康生活——过分相信偏方治大病、不适宜从事过于激烈的运动。 \n  \n 其 它——无法对任何活动感到兴趣、虚张声势、自以为是。",
    "27": "基本含义——失去信赖、多管闲事、过于依赖他人、心胸狭隘、被强迫推销、孤立无援。 \n  \n 恋爱婚姻——缘分浅薄、步调缓慢、彼此不够体贴、占有欲过重、因固执己见令人反感、父母反对。 \n  \n 工作学业——因轻视而品尝苦果、因厌恶老师对课业失去兴趣、过分依赖同学的笔记、得到错误的情报。 \n  \n 人际财富——干涉他人、令人困扰的好意、自以为是、没有必要的义气、因助人而损失金钱、无人援助。 \n  \n 健康生活——要多运动、呼吸道疾病、频咳、偏食。 \n  \n 其 它——恐高、喜清静、不宜乘坐飞机旅行。",
    "28": "基本含义——伤离别、关系结束、无助益、遭遇险阻、转移目标、兴趣无法持久、无精打采、表里不一、易受诱惑。 \n  \n 恋爱婚姻——关系冷淡、移情别恋、水性杨花、短暂的恋情、分手、无法赢得芳心。 \n  \n 工作学业——没有计划、不能持之以恒、缺乏注意力、光说不练、无心用功、学习效率低下、成绩不佳。 \n  \n 人际财富——开销大、资金短缺、破财，意气用事、朋友不助、意见不合、团队解散、交不到好朋友。 健康生活——因刺激性食物导致肠胃功能紊乱、化妆品过敏、经期不顺。 \n  \n 其 它——见异思迁遇事不能持之以恒、目标不明确、易受诱惑、笨拙、闷闷不 乐、情绪萎靡不振。",
    "29": "基本含义——高效率、把握先机、以积极的心态面对事物、获得胜利、取得驾照、搬家。 \n  \n 恋爱婚姻——情场得意、恋情进展迅速、积极交往、大胆追求。 \n  \n 工作学业——独立作业、自信、迅速调整情绪以提高效率、竞争激烈、适合于娱乐相关的职业、成绩进步、考试及格过关。 \n  \n 人际财富——存款购车，交友广博、个性活泼、善于人际交往、独立自主。",
    "30": "基本含义——精力不足、急躁不安、丧失信息、忍耐力不足、自私自大。 \n  \n 恋爱婚姻——对感情失去信心、面对爱情懦弱而不能坚持、渴求爱情却无终而返、经不住诱惑、彼此感情牵强。 \n  \n 工作学业——学艺不精、不能持之以恒、欲速而不达、好高骛远、向困难低头，学习不求甚解、欲速而不达、面对学业不能持之以恒。 \n  \n 人际财富——赌博输钱、透支、不善理财、因诱惑失财，因任性妄为受他人排斥、禁不起他人诱惑、对交友失去信心。 \n  \n 健康生活——精疲力竭、因体力透支大病。 \n  \n 其 它——说服他人、目中无人、狂妄自私、不善配合喜独来独往、禁不住诱惑。",
    "31": "基本含义——口无遮拦、俗气、神经质、为人刻薄、行事不够理智、多疑。 \n  \n 恋爱婚姻——保守、多疑、自闭、孤寂、轻浮的恋情、对爱侣过于刻薄、缺乏告白的勇气。 \n  \n 工作学业——多疑焦虑、因注意力不够集中而错误百出、实力无法发挥、自卑、考试不顺利、因嫉妒肆意贬低他人。 \n  \n 人际财富——无畏的开销、不懂节制，对旁人缺乏信任、互相猜疑、受自卑困扰、孤僻、和朋友闹别扭。 \n  \n 健康生活——神经质、过于紧张引发肠胃不适、气色差、肠胃方面的疾病。 \n  \n 其 它——多愁善感、独处、逃避、自虐、心胸狭隘、追逐小利。",
    "32": "基本含义——判断错误、情绪低落、运气不佳、左右为难、少安毋躁、一时的幸福、爽约。 \n  \n 恋爱婚姻——缺乏要领的交往方式、不稳定的恋情、亲事告吹、短暂的恋情、激情冷却、失恋、错失良机。 \n  \n 工作学业——竭尽全力却无功而返、效率低下、被同事或领导误解、希望落空、成绩低落。 \n  \n 人际财富——超支、上当受骗，误解较多、人际关系不稳定、竭尽全力却往往白忙一场、与友人意见不和。 \n  \n 健康生活——情绪储蓄低迷、病情有恶化的可能。 \n  \n 其 它——暂时的好运，爽约、对事物感到乏味、生活单一无趣。",
    "33": "基本含义——不公平、有始无终、以自己的意见去断定、事事不能两全、不均衡。 \n  \n 恋爱婚姻——不够主动、彼此个性不合、不顾后果的交往、脚踏两支船、单相思、第三者插足、对待恋情不够诚实、与异性交往暧昧不清。 \n  \n 工作学业——偏科现象严重、墨守成规以致失败、缺乏能力或自信、行为不检点、考试失误。  \n  \n 人际财富——缺乏道德观念、懒好人、左右为难、对朋友过于挑剔、财务危机、财不露白、遭遇债务纠纷。 \n  \n 健康生活——身材不匀称、无法控制体重、偏食。 \n  \n 娱乐兴趣——对逛街购物已感乏味、对任何事物都无法产生长久兴趣",
    "34": "基本含义——希望破灭、因私欲而受罚、做无用功、没有必要的付出、自我毁灭、缺乏实施能力、事如泡影。 \n  \n 恋爱婚姻——得不到回报的恋情、没有发展的可能、不值得奉献的对象、对感情失去耐心、藕断丝连。 \n  \n 工作学业——无法忍受苛刻的环境、工作处境被动、努力而无获、物极必反、言语缺乏条理、只考虑自己的利益、成绩退步、不思进取、考试失利。 \n  \n 人际财富——情绪化的话费、奢靡浪费，没有代价的付出、自私、与人交往畏首畏尾、杞人忧天。  \n  \n 健康生活——易骨折、易因血液不畅导致四肢麻木、因疏忽造成现有病情恶化。 \n  \n 其 它——白费心机、脱离现实、缺乏行动力、烦人的应酬。",
    "35": "基本含义——改变计划、变更形象、东山再起、走出低谷、脱胎换骨、勇于开拓、精力充沛。 恋爱婚姻——博得芳心、感情好转、破镜重圆、萌发新的爱情。 \n  \n 工作学业——业绩回升、有所转机、面对瓶颈力挽狂澜、同事纷纷辞职跳槽、成绩有所提升、考试运转好、开始新的学习计划。 \n  \n 人际财富——财产失而复得，与朋友和解、面对以往的恩怨既往不咎、往日的朋友倍加亲密、新友谊的展开。 \n  \n 健康生活——适量运动有益健康、凭借自身毅力战胜病魔。 \n  \n 其 它——心情转好、勇于开拓。",
    "36": "基本含义——缺乏自我调节的能力、开销过大、遗忘初衷、精力消耗殆尽、毫无节制、沉闷的说教。 \n  \n 恋爱婚姻——面对感情三心二意、双方都不善于控制情绪、无法调整恋情中彼此的位置、发生摩擦无法主动谈和、彼此没有默契、让彼此身心疲惫的恋情。 \n  \n 工作学业——面对繁琐的工作过于情绪化、事业走入低谷、要约被单方取消、精神松懈、项目进展不顺利、成绩下滑。 \n  \n 人际财富——奢靡浪费、与他人发生财务纠纷、与人AA制消费，因无法控制自己的情绪而得罪别人、应酬颇多以致身心疲惫、与朋友关系不和睦。 \n  \n 健康生活——生活习惯不规律、精神状态不稳定、体力消耗殆尽、食欲不振。 \n  \n 其 它——冗长的说教、意见不和、协作失败。",
    "37": "基本含义——摆脱不良诱惑、与酒肉朋友断交、抛弃欲望、有走出困境的机会、摆脱束缚、重获自由、解除负担、能够表达自己的意志。 \n  \n 恋爱婚姻——分手的时机、结束拖延已久的恋情、摆脱感情的困扰、几乎没有进展的恋情、脱离对肉欲的沉迷。 \n  \n 工作学业——团队重担、闯过事业瓶颈、摆脱无法忍受的工作环境或工作环境的到改善，学习环境有所改善、较弱科目的成绩会有所好转、父母师长的管束稍事松懈。 \n  \n 人际财富——脱离财务限制、扭亏为盈、投资转型期，断绝不良关系、放弃私欲、恢复理智、人际关系有所改善。 \n  \n 健康生活——心情转好、肤质转好、青春痘逝去。 \n  \n 其  它——向往轻松的生活方式、开展新的计划、重获自由、告白心声。",
    "38": "基本含义——摆脱不良诱惑、与酒肉朋友断交、抛弃欲望、有走出困境的机会、摆脱束缚、重获自由、解除负担、能够表达自己的意志。 \n  \n 恋爱婚姻——分手的时机、结束拖延已久的恋情、摆脱感情的困扰、几乎没有进展的恋情、脱离对肉欲的沉迷。 \n  \n 工作学业——团队重担、闯过事业瓶颈、摆脱无法忍受的工作环境或工作环境的到改善，学习环境有所改善、较弱科目的成绩会有所好转、父母师长的管束稍事松懈。 \n  \n 人际财富——脱离财务限制、扭亏为盈、投资转型期，断绝不良关系、放弃私欲、恢复理智、人际关系有所改善。 \n  \n 健康生活——心情转好、肤质转好、青春痘逝去。 \n  \n 其 它——向往轻松的生活方式、开展新的计划、重获自由、告白心声。",
    "39": "基本含义——缺乏想象力、幻想破灭、好高骛远、错失良机、固执己见、理想与现实无法兼顾。 \n  \n 恋爱婚姻——与对方无法心灵相通、面对恋情期望过高、虽有进展却由于身心疲惫终决放弃、无法对对方产生爱意、期望落空、以貌取人、两人出现难以解决的隔阂。 \n  \n 工作学业——虽然创意无限到头来却一无所获、消息来源有误、得不到同事和上司的信任，考试受挫、期望过高、理想不切现实、需要改进学习方法。 \n  \n 人际财富——破财、无法得到预期的收益，自我意识过高、苛求他人、对朋友感到失望、无意义的攀谈。 \n  \n 健康生活——身心疲惫。 \n  \n 其 它——适合相对清静的户外场所。",
    "40": "基本含义——状况逐渐好转、事件可以冲淡一切、疑虑渐消、幸免遇害。 \n  \n 恋爱婚姻——时间将使二人的感情越发亲密、婚期在即、冰释前嫌、被动等待爱情。 \n  \n 工作学业——境遇逐渐好转、检讨以往的过失、遭遇瓶颈苦研良策、默默付出终将获得收益。 \n  \n 人际财富——财务危机得以解除、即将度过拮据期，以往的困惑渐渐逝去、人际交往顺利、冰释前嫌。 健康生活——体力逐渐恢复、病体几尽痊愈、心情开朗。 \n  \n 其 它——时间安排过于紧张、生活节奏过快。",
    "41": "基本含义——意志消沉、约会取消、情绪低落、事事无法持久、性格不开朗、感到无助、生活不稳定。 \n  \n 恋爱婚姻——因冲动致使感情破裂、迟迟不能步入婚礼殿堂、有分手的危险、无法破镜重圆、不被祝福的恋情、婚约取消。 \n  \n 工作学业——听不进他人劝诫、对工作没有耐心、原定计划无法实施、后劲不足、无固定职业或短期内很难找到工作，厌学、听不进他人劝诫、缺乏耐心、成绩低落。 \n  \n 人际财富——收入下降、奢靡浪费、因爱慕虚荣而增加开支，被同伴排挤、与旧友绝交、给人消极猥亵之感、让人无法亲近。 \n  \n 健康生活——体力不足、生活无规律、体型发胖。 \n  \n 其 它——对人和事物都无法持久、被迫外出、性格孤僻、生活窘迫。",
    "42": "基本含义——一蹶不振、尚未开始便已结束、犹豫不决、行为不妥、生活散漫、良心发现内心颇感罪恶。 \n  \n 恋爱婚姻——嫉妒心过重、辜负对方的好意、无法向对方展开心扉、无法破镜重圆、对待恋情不够认真、旧情难忘。 \n  \n 工作学业——求知遇阻、事业受挫、面对困难一蹶不振、颇感心有余而力不足、业绩低迷，考场受挫、对考试期望过高、难以靠近期望的学校。 \n  \n 人际财富——丢失财物、遗失重要的物品，夹在朋友之间左右为难、与旧友无法和好、对朋友感到失望、过去被好友背叛致使心里留下阴影、认人有误。 \n  \n 健康生活——积劳成疾、病情延误。 \n  \n 其 它——重返故土、因贪玩导致身心疲惫、生活无规律。",
    "43": "基本含义——无法全身心地投入、杞人忧天、事事不顺、不安现状、情绪低迷、思维颇显幼稚。 \n  \n 恋爱婚姻——恋情前景不明朗、彼此难以结合、感情容易破裂、彼此关系暧昧不清、以往的热情逐渐冷却、对伴侣失去新鲜感。 \n  \n 工作学业——面对工作感到力不从心或精神懈怠、事业前景不被看好、处于事业低潮期、项目半途而废、工作备受他人欺压、潜能受外界束缚无法发挥、对当前薪金待遇感到不满，成绩低落、处于学业低潮期、课业半途而废、面对学科精神懈怠、因备考不足致使考试失利。 \n  \n 人际财富——破产、现金流短缺，交友遇挫、朋友关系冷淡、处世过于幼稚以致事事不顺。 \n  \n 健康生活——肝火盛气大伤身、心理压力过重无法宣泄。 \n  \n 其 它——计划不周、不适宜乔迁动土、缺乏鲜见之名、不得要领。",
    "44": "基本含义——情绪低落、遭受失败、漫无目的的四处流浪、行为散漫、愚昧的行动。 \n  \n 恋爱婚姻——心情空虚、轻率的恋情、无法长久持续的融洽感、不安的爱情的旅程、对婚姻感到束缚、彼此忽冷忽热、不顾众人反对坠入爱河、为恋人的负心所伤、感情不专一。 \n  \n 工作学业——成绩一落千丈、没有耐心、行事缺乏计划、经常迟到、猜题错误导致考试失利、考前突击无法为你带来太大的效果。 \n  \n 人际财富——因过于单纯被他人轻视、被旁人视为怪胎、言行怪癖不合常理、粗心大意、行事无节制、缺乏理财观念、愿望难以达成、收入除渐趋于稳定、财务操作毫无计划。 \n  \n 健康生活——不重视自身健康、生活不规律、因贪玩影响健康。 \n  \n 其  它——旅途中断、兴趣广泛、不脚踏实地、无视旁人眼光、冲动行事、行为不检点",


  },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var cardNumber = wx.getStorageSync('cardNumber');
    this.setData({ "cardNumber": cardNumber});
    // var cardNumberStart = selectedCard.indexOf('card');
    // cardNumberStart = cardNumberStart + 4;
    // var cardNumberEnd = selectedCard.indexOf('.jpg');
    // var cardNumber = selectedCard.substring(cardNumberStart, cardNumberEnd);
    var cardNumberOrig = cardNumber;
    var cardStatus = "正位";
    if (cardNumber > 22){
      cardStatus = "逆位";
      cardNumber = cardNumber - 22;
    }
    this.setData({ "cardNumber": cardNumber });
    this.setData({ "cardStatus": cardStatus });
    this.setData({ "cardName": this.data.cardName[cardNumber] });
    this.setData({ "cardKeyword": this.data.cardKeyword[cardNumber] }); 
    this.setData({ "cardZodiac": this.data.cardZodiac[cardNumber] });
    this.setData({ "cardElement": this.data.cardElement[cardNumber] });
    this.setData({ "cardSyble": this.data.cardSyble[cardNumber] });
    this.setData({ "cardMean": this.data.cardMean[cardNumberOrig] });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
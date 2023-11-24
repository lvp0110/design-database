const App = {

    data()
    {
        return {
            imgMassage: new Image(100,100),
            info:'Rw - индекс звукоизоляции воздушного шума,обеспечиваемого конструкцией',
            currentItems:0,
            search_constr: '',
            search_materials: '',
            tableMaterial:null,
            tableConstr:null,
            ConstrToCalc:[],
            constR:{
                id:'',
                ag_id:'',
                title:'',
                key_id:null,
                img:'',
            },
            calculatedMaterials:[],
            materialNames:{
                name:'',
                code:'',
                img:'',
            },
            Materials:[
                {
                    code:'1177.1001',
                    name:'Герметик виброакустический Вибросил',
                    length:'5000',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img:'img/materials/vibrosil.jpg',
                },
                {
                    code:'1185.1101',
                    name:'Ленточная звукоизоляционная прокладка Вибростек-М100',
                    length:'5000',
                    width:'2',
                    heigth:'2',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img: 'img/materials/vibrostek_100.jpg'
                },
                {
                    code:'1185.1102',
                    name:'Ленточная звукоизоляционная прокладка Вибростек-М150',
                    length:'5000',
                    width:'2',
                    heigth:'2',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img: 'img/materials/vibrostek_150.jpg'
                },
                {
                    code:'1240.1000',
                    name:'Шумопласт-грунт, ведро 3кг',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img: 'img/materials/SPlast_priming.webp'
                },
                {
                    code:'88665',
                    name:'Лист Gyproc AKU-line облицовочный 2500х1200х12',
                    length:'2500',
                    width:'1200',
                    heigth:'12',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/AKU-line.jpg'
                },
                {
                    code:'1211.1001',
                    name:'Саундлайн-dB,звукоизоляционный триплекс',
                    length:'1200',
                    width:'1200',
                    heigth:'16',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/S_dB.jpg'
                },
                {
                    code:'1191.1102',
                    name:'Звукоизоляционная панель ЗИПС-Вектор',
                    length:'1200',
                    width:'600',
                    heigth:'40',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_vektor.webp'
                },
                {
                    code:'1191.2106',
                    name:'Звукоизоляционная панель ЗИПС-Модуль',
                    length:'1200',
                    width:'600',
                    heigth:'70',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_modul_floor.webp'
                },

                {
                    code:'1191.5108',
                    name:'Звукоизоляционная панель ЗИПС-Синема',
                    length:'1200',
                    width:'600',
                    heigth:'120',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_cinema.webp'
                },
                {
                    code:'1191.3103',
                    name:'Звукоизоляционная панель ЗИПС-III-Ультра',
                    length:'1200',
                    width:'600',
                    heigth:'42',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_IIIultra.webp'
                },
                {
                    code:'1191.4104',
                    name:'Звукоизоляционная панель ЗИПС-Z4',
                    length:'1200',
                    width:'600',
                    heigth:'43',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_Z4.jpg'
                },
                {
                    code:'1191.6101',
                    name:'Звукоизоляционная панель ЗИПС-Слим',
                    length:'1200',
                    width:'600',
                    heigth:'25',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_slim.webp'
                },
                {
                    code:'1121.2002',
                    name:'Саундлайн-ПГП Супер',
                    length:'1200',
                    width:'600',
                    heigth:'23',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/pgp_super.webp'
                },
                {
                    code:'1222.2201',
                    name:'Шуманет-ЭКО Акустическая экологичная стеклоплита',
                    length:'1200',
                    width:'600',
                    heigth:'50',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumanet_eco.jpg'
                },
                {
                    code:'1222.1101',
                    name:'Шуманет-БМ 50мм',
                    length:'1200',
                    width:'600',
                    heigth:'50',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumanet_BM.jpg'
                },
                {
                    code:'1222.1103',
                    name:'Шуманет-БМ 70мм',
                    length:'1200',
                    width:'600',
                    heigth:'70',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumanet_BM.jpg'
                },
                {
                    code:'67986',
                    name:'Акуфлор-S20 ',
                    length:'1200',
                    width:'600',
                    heigth:'20',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/akufloor_S20.webp'
                },
                {
                    code:'1235.1101',
                    name:'Звуко-гидроизоляционный рулон Шуманет-100Гидро',
                    length:'10000',
                    width:'1000',
                    heigth:'5',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumanet_100gidro.jpg'
                },
                {
                    code:'1235.2101',
                    name:'Звуко-гидроизоляционный рулон Шуманет-100Комби',
                    length:'10000',
                    width:'1000',
                    heigth:'5',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumanet_100komby.jpg'
                },

                {
                    code:'1201.1005',
                    name:'Звукоизоляционная плита ЗИПС-ПОЛ Вектор',
                    length:'1200',
                    width:'600',
                    heigth:'50',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_vektor_floor.webp'
                },
                {
                    code:'1201.2007',
                    name:'Звукоизоляционная плита ЗИПС-ПОЛ Модуль',
                    length:'1200',
                    width:'600',
                    heigth:'75',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/zips_modul_floor.webp'
                },
                {
                    code:'1252.1105',
                    name:'Плита звукоизоляционная Шумостоп-К2',
                    length:'1200',
                    width:'300',
                    heigth:'20',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumostop_K2.webp'
                },
                {
                    code:'1252.2204',
                    name:'Плита звукоизоляционная Шумостоп-С2',
                    length:'1200',
                    width:'600',
                    heigth:'20',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumostop_C2.webp'
                },
                {
                    code:'1251.1201',
                    name:'Шумостоп-Техно 350',
                    length:'1200',
                    width:'600',
                    heigth:'33',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumostop_Tehno.webp'
                },
                {
                    code:'1251.2201',
                    name:'Шумостоп-Техно 600',
                    length:'1200',
                    width:'600',
                    heigth:'33',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumostop_Tehno.webp'
                },
                {
                    code:'1251.3201',
                    name:'Шумостоп-Техно 1200',
                    length:'1200',
                    width:'600',
                    heigth:'33',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumostop_Tehno.webp'
                },
                {
                    code:'1247.1000',
                    name:'Звукоизоляционное выравнивающее покрытие ШУМОПЛАСТ 20мм',
                    length:'0',
                    width:'0',
                    heigth:'20',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/SPlast.webp'
                },
                {
                    code:'1240.1000',
                    name:'Грунтовочная масса Шумопласт-грунт',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/SPlast_priming.webp'
                },
                {
                    code:'10300005',
                    name:'Акуфлекс-Супер',
                    length:'10000',
                    width:'1500',
                    heigth:'4',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/akuflex_super.webp'
                },
                {
                    code:'1235.3202',
                    name:'Шуманет-Термо',
                    length:'1400',
                    width:'7000',
                    heigth:'9',
                    units:'шт',
                    tipe: 'calcPanel',
                    img: 'img/materials/shumanet_termo.jpg'
                },

                {
                    code:'41337',
                    name:'Профиль Gyproc-Стардарт ПП 60х27',
                    length:'3000',
                    width:'60',
                    heigth:'27',
                    units:'шт',
                    tipe: 'calcProfStud',
                    img: 'img/materials/60_27.jpg'
                },
                {
                    code:'41342',
                    name:'Профиль Gyproc-Стардарт ПС 50/50',
                    length:'3000',
                    width:'50',
                    heigth:'50',
                    units:'шт',
                    tipe: 'calcProfStud',
                    img: 'img/materials/50_50.webp'
                },
                {
                    code:'41343',
                    name:'Профиль Gyproc-Стардарт ПС 75/50',
                    length:'3000',
                    width:'75',
                    heigth:'50',
                    units:'шт',
                    tipe: 'calcProfStud',
                    img: 'img/materials/75_50.webp'
                },
                {
                    code:'41344',
                    name:'Профиль Gyproc-Стардарт ПС 100/50',
                    length:'3000',
                    width:'100',
                    heigth:'50',
                    units:'шт',
                    tipe: 'calcProfStud',
                    img: 'img/materials/100_50.webp'
                },
                {
                    code:'Wave',
                    name:'Профиль Виброфлекс-Wave 100/50',
                    length:'3000',
                    width:'100',
                    heigth:'50',
                    units:'шт',
                    tipe: 'calcProfStud',
                    img: 'img/materials/wave.webp'
                },
                {
                    code:'41338',
                    name:'Профиль Gyproc-Стардарт ПН 27х28',
                    length:'3000',
                    width:'28',
                    heigth:'27',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img: 'img/materials/28_27.jpg'
                },
                {
                    code:'41339',
                    name:'Профиль Gyproc-Стардарт ПН 50/40',
                    length:'3000',
                    width:'50',
                    heigth:'40',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img: 'img/materials/50_40.webp'
                },
                {
                    code:'41340',
                    name:'Профиль Gyproc-Стардарт ПН 75/40',
                    length:'3000',
                    width:'75',
                    heigth:'40',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img: 'img/materials/75_40.webp'
                },
                {
                    code:'41341',
                    name:'Профиль Gyproc-Стардарт ПН 100/40',
                    length:'3000',
                    width:'100',
                    heigth:'40',
                    units:'шт',
                    tipe: 'calcProfRunner',
                    img: 'img/materials/100_40.webp'
                },
                {
                    code:'40925',
                    name:'Удлинитель профилей Gyproc-Стардарт ПП 60х27',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcConnector',
                    img: 'img/materials/extension60_27.jpg'
                },
                {
                    code:'сonnector_two_level',
                    name:'Соединитель ПП 27х60, двухуровневый',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcConnector',
                    img: 'img/materials/connector60_27.jpg'
                },
                {
                    code:'2316.1010',
                    name:'Виброфлекс К-15,виброизолирующее крепление потолочное',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcHunger',
                    img: 'img/materials/vibroflex_K15.webp'
                },
                {
                    code:'2316.2020',
                    name:'Виброфлекс-КС, виброизолирующее стеновое крепление',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcHunger',
                    img: 'img/materials/vibroflex_KC.webp'
                },
                {
                    code:'2316.3010',
                    name:'Виброфлекс-коннект ПП, для подвесных потолков',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcHunger',
                    img: 'img/materials/vibroflex_PP.webp'
                },
                {
                    code:'2316.4020',
                    name:'Виброфлекс-ПС стеновой',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcHunger',
                    img: 'img/materials/vibroflex_PC.webp'
                },
                {
                    code:'20400402',
                    name:'Виброизолирующая опора Виброфлекс-LD',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcHunger',
                    img: 'img/materials/vibroflex_LD.webp'
                },
                {
                    code:'d1',
                    name:'Дюбель-гвоздь анкерный',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcScrewDowel',
                    img: 'img/materials/dowel_metal.jpg'
                },
                {
                    code:'d2',
                    name:'Дюбель-гвоздь полипропиленовый',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcScrewDowel',
                    img: 'img/materials/dowel_propilene.jpg'
                },
                {
                    code:'ln11',
                    name:'ln11',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcScrewLN',
                    img: 'img/materials/ln11.jpg'
                },
                {
                    code:'mn30',
                    name:'Шуруп MN 30',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcScrewMN',
                    img: 'img/materials/mn30.jpg'
                },
                {
                    code:'tn40',
                    name:'Шуруп TN 40',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'calcScrewTN',
                    img: 'img/materials/tn40.jpg'
                },
                {
                    code:'metal_mesh',
                    name:'Металлическая сетка 50х50 d=4мм',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },
                {
                    code:'sand_concrete',
                    name:'Пескобетон мешок М300 50 кг',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },

                {
                    code:'PVC_film',
                    name:'PVC_film',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },
                {
                    code:'deep_penetration_primer',
                    name:'Грунт глубокого проникновения',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },
                {
                    code:'rubber_mastic',
                    name:'rubber_mastic',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },
                {
                    code:'plywood',
                    name:'Лист Фанеры',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },
                {
                    code:'beam',
                    name:'Брус 50x50',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },
                {
                    code:'reinforced_film',
                    name:'Армированная полиэтиленовая пленка',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },
                {
                    code:'reinforced_construction_tape',
                    name:'Армированный строительный скотч',
                    length:'0',
                    width:'0',
                    heigth:'0',
                    units:'шт',
                    tipe: 'thirdPartyMaterials',
                    img: 'img/materials/images.jpg'
                },


            ],
            Items:[
            {
                id: 101, 
                title: 'Перегородка на каркасе 50 мм',
                description: 'Перегородка на одинарном каркасе 50 мм. Толщина конструкции: 108 мм, Rw ≈ 60 дБ',
                c_id: 'W',
                template:50.1 ,
                img: 'img/Img_constr/partition/partition_50.webp',
                ag_id: 'AG.W101',
                specification:` 
                    Конструкция звукоизоляционной каркасной перегородки состоит из слоя звукопоглощающих плит марки "Шуманет", 
                    акустического триплекса Саундлайн-dB, финишных листов Gyproc Aku-line, виброизоляционной ленты Вибростек-М 150, 
                    герметика Вибросил, металлических профилей Gyproc-Стандарт ПН 50/40 и ПС 50/50.`,
              
            },
            {
                id: 102, 
                title: 'Перегородка на каркасе 75 мм',
                description: 'Перегородка на одинарном каркасе 75 мм. Толщина конструкции: 133 мм, Rw ≈ 62 дБ',
                c_id :'W',
                template:75.1,
                img: 'img/Img_constr/partition/partition_75.webp',
                ag_id: 'AG.W102',
                specification:` 
                    Конструкция звукоизоляционной каркасной перегородки состоит из слоя звукопоглощающих плит марки "Шуманет" БМ 70мм,
                    акустического триплекса Саундлайн-dB, финишных листов Gyproc Aku-line, виброизоляционной ленты Вибростек-М 150, 
                    герметика Вибросил, металлических профилей Gyproc-Стандарт ПН 75/40 и ПС 75/50.`
            },
            {
                id: 103, 
                title: 'Перегородка на каркасе 100 мм.',
                description: 'Перегородка на одинарном каркасе 100 мм. Толщина конструкции: 158 мм, Rw ≈ 64 дБ.',
                c_id:'W',
                template:100.1,
                img: 'img/Img_constr/partition/partition_100.webp',
                ag_id: 'AG.W103',
                specification:` 
                    Состоит из 2 слоев звукопоглощающих плит марки Шуманет, акустического триплекса Саундлайн-dB,
                    финишных листов Gyproc Aku-line, виброизоляционной ленты Вибростек-М 100 в два слоя и два ряда, 
                    герметика Вибросил, металлических профилей Gyproc-Стандарт ПН 100/40 и ПС 100/40.`
            },
            {
                id: 104, 
                title: 'Перегородка на каркасе Wave 100 мм',
                description: 'Перегородка на одинарном каркасе Виброфлекс-Wave 100 мм. Толщина конструкции: 158 мм, Rw ≈ 64 дБ.',
                c_id:'W',
                template:101.1,
                img: 'img/Img_constr/partition/partition_100.webp',
                ag_id: 'AG.W104',
                specification:` 
                    Состоит из 2 слоев звукопоглощающих плит марки Шуманет, акустического триплекса Саундлайн-dB,
                    финишных листов Gyproc Aku-line, виброизоляционной ленты Вибростек-М 100 в два слоя и два ряда, 
                    герметика Вибросил, металлических профилей Gyproc-Стандарт ПН 100/40 и Виброфлекс-Wave.`
            },
            {
                id: 105, 
                title: 'Перегородка на каркасе 2x50 мм',
                description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x50 мм на раздельных основаниях звукоизолирующих полов',
                c_id:'W',
                template:50.2,
                img: 'img/Img_constr/partition/partition_50_2.webp',
                ag_id: 'AG.W105'
            },
            {
                id: 106, 
                title: 'Перегородка на каркасе 2x75 мм',
                description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x75 мм на раздельных основаниях звукоизолирующих полов',
                c_id:'W',
                template:75.2,
                img: 'img/Img_constr/partition/partition_75_2.webp',
                ag_id: 'AG.W106'
            },
            {
                id: 107, 
                title: 'Перегородка на каркасе 2x100 мм',
                description: 'Перегородка на двойном (независимом) сдвоенном каркасе 2x100 мм на раздельных основаниях звукоизолирующих полов',
                c_id:'W',
                template:100.2,
                img: 'img/Img_constr/partition/partition_100_2.webp',
                ag_id: 'AG.W107'
            },
            {
                id: 108, 
                title: 'Перегородка системы Саундлайн dB-X AL',
                description:'Перегородка системы Саундлайн dB-X AL на одинарном каркасе 50 мм',
                c_id:'W',
                template:8.1,
                img: 'img/Img_constr/partition/partition_50.webp',
                ag_id: 'AG.W108'
            },
            
            {
                id: 201, 
                title: 'ЗИПС-Вектор',
                description: 'Звукоизолирующая система ЗИПС-Вектор, смонтированная на стене',
                c_id: 'L',
                template:6,
                img: 'img/Img_constr/frame/frame_z_vektor.webp',
                ag_id: 'AG.Z201'
            },
            {
                id: 202, 
                title: 'ЗИПС-Модуль',
                description: 'Звукоизолирующая система ЗИПС-Модуль, смонтированная на стене',
                c_id: 'L',
                template:6,
                img: 'img/Img_constr/frame/frame_z_module.webp',
                ag_id: 'AG.Z202'
            },
            {
                id: 203, 
                title: 'ЗИПС-III-Ультра',
                description: 'Звукоизолирующая система ЗИПС-III-Ультра, смонтированная на стене',
                c_id:'L',
                template:6,
                img: 'img/Img_constr/frame/frame_IIIUltra.webp',                                
                ag_id: 'AG.Z203'

            },
            {
                id: 204, 
                title: 'ЗИПС-Z4',
                description: 'Звукоизолирующая система ЗИПС-Z4, смонтированная на стене',
                c_id: 'L',
                template:6,
                img: 'img/Img_constr/frame/frame_Z4.webp',
                ag_id: 'AG.Z204'

            },
            {
                id: 205, 
                title: 'ЗИПС-Синема',
                description: 'Звукоизолирующая система ЗИПС-Синема, смонтированная на стене',
                c_id:'L',
                template:6,
                img: 'img/Img_constr/frame/frame_z_cinema.webp',
                ag_id: 'AG.Z205'
            },
            {
                id: 206, 
                title: 'ЗИПС-Слим',
                description: 'Звукоизолирующая система ЗИПС-Слим, смонтированная на стене',
                c_id:'L',
                template:6,
                img: 'img/Img_constr/frame/frame_z_slim.webp',
                ag_id: 'AG.Z206'
            },
            
            {
                id: 201, 
                title: 'ЗИПС-Вектор',
                description: 'Звукоизолирующая система ЗИПС-Вектор, смонтированная на потолке',
                c_id:'C',
                template:4,
                img: 'img/Img_constr/ceiling/ceiling_z_vektor.webp',
                ag_id: 'AG.Z201'
            },
            {
                id: 202, 
                title: 'ЗИПС-Модуль',
                description: 'Звукоизолирующая система ЗИПС-Модуль, смонтированная на потолке',
                c_id:'C',
                template:4,
                img: 'img/Img_constr/ceiling/ceiling_z_module.webp',
                ag_id: 'AG.Z202'
            },
            {
                id: 203, 
                title: 'ЗИПС-III-Ультра',
                description: 'Звукоизолирующая система ЗИПС-III-Ультра, смонтированная на потолке',
                c_id:'C',
                template:4,
                img: 'img/Img_constr/ceiling/ceiling_IIIultra.webp',
                ag_id: 'AG.Z203'
            },
            {
                id: 204, 
                title: 'ЗИПС-Z4',
                description: 'Звукоизолирующая система ЗИПС-Z4, смонтированная на потолке',
                c_id:'C',
                template:4,
                img: 'img/Img_constr/ceiling/ceiling_z4.webp',
                ag_id: 'AG.L204'
            },
            {
                id:205, 
                title: 'ЗИПС-Синема',
                description: 'Звукоизолирующая система ЗИПС-Синема, смонтированная на потолке',
                c_id:'C',
                template:4,
                img: 'img/Img_constr/ceiling/ceiling_z_cinema.webp',
                ag_id: 'AG.L205'
            },
            {
                id: 401, 
                title: 'Облицовка на каркасе 50 мм',
                description: 'Облицовка на независимом сдвоенном каркасе 50 мм',
                c_id:'L',
                template:50,
                img: 'img/Img_constr/frame/frame_50.webp',
                ag_id: 'AG.L401'
            },
            {
                id: 402, 
                title: 'Облицовка на каркасе 75 мм',
                description: 'Облицовка на независимом каркасе 75 мм',
                c_id:'L',
                template:75,
                img: 'img/Img_constr/frame/frame_75.webp',
                ag_id: 'AG.L402'
            },
            {
                id: 403, 
                title: 'Облицовка на каркасе 100 мм',
                description: 'Облицовка на независимом каркасе 100 мм',
                c_id:'L',
                template:100,
                img: 'img/Img_constr/frame/frame_100.webp',
                ag_id: 'AG.L403'
            },
            {
                id: 404, 
                title: 'Облицовка c применением Виброфлекс-Коннект ПС',
                description: 'Облицовка на каркасе ПП 60/27 с применением креплений Виброфлекс-Коннект ПС',
                c_id:'L',
                template:101,
                img: 'img/Img_constr/frame/frame_connect_pc.webp',
                ag_id: 'AG.L404'
            },
            {
                id: 405, 
                title: 'Облицовка с применением Виброфлекс-КС',
                description: 'Облицовка на каркасе ПП 60/27 с применением креплений Виброфлекс-КС',
                c_id:'L',
                template:101,
                img: 'img/Img_constr/frame/frame_connect_kc.webp',
                ag_id: 'AG.L405'
            },

            {
                id: 501, 
                title: 'Потолок на креплениях Виброфлекс-Коннект ПП',
                description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-Коннект ПП',
                c_id:'C',
                template:5,
                img: 'img/Img_constr/ceiling/ceiling_100.webp',
                ag_id: 'AG.C501'
            },
            {
                id: 502, 
                title: 'Потолок на креплениях Виброфлекс-К15',
                description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-К15',
                c_id:'C',
                template:5,
                img: 'img/Img_constr/ceiling/ceiling_130.webp',
                ag_id: 'AG.C502'
            },
            {
                id: 503, 
                title: 'Потолок на креплениях Виброфлекс-К15 с удлинителями',
                description: 'Подвесной потолок, смонтированный на креплениях Виброфлекс-К15 с удлинителями из профиля ПП 60/27',
                c_id:'C',
                template:5,
                img: 'img/Img_constr/ceiling/ceiling_200.webp',
                ag_id: 'AG.C503'
            },

            {
                id: 601, 
                title: 'Пол Акуфлекс-Супер, паркет, 15мм',
                description:'Паркетная доска 15 мм на материале Акуфлекс-Супер',
                c_id:'F',
                template:1,
                img: 'img/Img_constr/floor/acuflexLP.png',
                ag_id: 'AG.F601'

            },
            {
                id: 602, 
                title: 'Пол Акуфлекс-Супер, ламинат, 8 мм',
                description: 'Ламинат 8 мм на материале Акуфлекс-Супер',
                c_id:'F',
                template:1,
                img: 'img/Img_constr/floor/acuflexLP.png',
                ag_id: 'AG.F602'
            },
            {
                id: 603, 
                title: 'Пол Акуфлекс-Супер, стяжка, 65 мм',
                description:'Звукоизолирующий пол на материале Акуфлекс-Супер',
                c_id:'F',
                template:1 ,
                img: 'img/Img_constr/floor/acuflex.png',
                ag_id: 'AG.F603'
            },
            {
                id: 604, 
                title: 'Пол Шуманет-100Комби',
                description: 'Звукоизолирующий пол на материале Шуманет-100Комби',
                c_id:'F',
                template:1 ,                                
                img: 'img/Img_constr/floor/100G_K.png',
                ag_id: 'AG.F604'

            },
            {
                id: 605, 
                title: 'Пол Шуманет-100Гидро',
                description:'Звукоизолирующий пол на материале Шуманет-100Гидро',
                c_id:'F',
                template:1 ,
                img: 'img/Img_constr/floor/100G_K.png',
                ag_id: 'AG.F605'
            },
            {
                id: 606, 
                title: 'Пол Шумопласт',
                description: 'Звукоизолирующая выравнивающая смесь Шумопласт',
                c_id:'F',
                template:9 ,
                img: 'img/Img_constr/floor/sPlast.png',
                ag_id: 'AG.F606'
            },
            {
                id: 'P', 
                title: 'Акуфлор S20, один слой',
                description: 'Звукоизолирующий пол с одним слоем системы плит Акуфлор S20',
                c_id:'F',
                template:2.1,                                
                img: 'img/Img_constr/floor/c2k2_1.png',
                ag_id: 'AG.F'

            },
            {
                id: 607, 
                title: 'Пол Шумостоп-С2/К2, один слой',
                description: 'Звукоизолирующий пол с одним слоем системы плит Шумостоп-С2/К2',
                c_id:'F',
                template:2 ,
                img: 'img/Img_constr/floor/c2k2_1.png',
                ag_id: 'AG.F607'
            },
            {
                id: 608, 
                title: 'Пол Шумостоп-С2/К2, два слоя',
                description: 'Звукоизолирующий пол с двумя слоями системы плит Шумостоп-С2/К2',
                c_id:'F',
                template:2.2 ,
                img: 'img/Img_constr/floor/c2k2_2.png',
                ag_id: 'AG.F608'
            },
            {
                id: 609, 
                title: 'Пол Шумостоп-К2, один слой',
                description: 'Звукоизолирующий пол с одним слоем материала Шумостоп-К2',
                c_id:'F',
                template:2 ,
                img: 'img/Img_constr/floor/k2_1.png',
                ag_id: 'AG.F609'
            },
            {
                id: 610, 
                title: 'Пол Шумостоп-К2, два слоя',
                description: 'Звукоизолирующий пол с двумя слоями материала Шумостоп-К2',
                c_id:'F',
                template:2.2 ,
                img: 'img/Img_constr/floor/k2_2.png',
                ag_id: 'AG.F610'
            },
            {
                id: 611, 
                title: 'Пол Шуманет-Термо',
                description: 'Звукоизолирующий пол с одним слоем материала Шуманет-Термо',
                c_id:'F',
                template:1,
                img: 'img/Img_constr/floor/termo.png',
                ag_id: 'AG.F611'
            },
            {
                id: 612, 
                title: 'Пол Шумостоп-Техно',
                description: 'Звукоизолирующий пол с применением панелей Шумостоп-Техно',
                c_id:'F',
                template:9.1,
                img: 'img/Img_constr/floor/tehno.png',
                ag_id: 'AG.F612'
            },
            {
                id: 613, 
                title: 'ЗИПС-ПОЛ Вектор',
                description: 'Сборная звукоизолирующая система ЗИПС-ПОЛ Вектор',
                c_id:'F',
                template:111,
                img: 'img/Img_constr/floor/Z_Vector.png',
                ag_id: 'AG.F613'
            },
            {
                id: 614, 
                title: 'ЗИПС-ПОЛ Модуль',
                description: 'Сборная звукоизолирующая система ЗИПС-ПОЛ Модуль',
                c_id:'F',
                template:111,
                img: 'img/Img_constr/floor/Z_Module.png',
                ag_id: 'AG.F614'
            },
            {
                id: 615, 
                title: 'Звукоизолирующий пол на лагах',
                description:'Звукоизолирующий пол на лагах',
                c_id:'F',
                template:3,
                img: 'img/Img_constr/floor/floor_lags.png',
                ag_id: 'AG.F615'
            },
        ],
        }
    },
    computed: {
        getSearch()
        {
            if(this.search_constr != '')
                return this.Items.filter((el) => el.title.toLowerCase().includes(this.search_constr.toLowerCase()))

            return this.Items;
        },
        getSearchMaterial(){
            if(this.search_materials != '')
                return this.Materials.filter((el) => el.name.toLowerCase().includes(this.search_materials.toLowerCase()))

            return this.Materials;
        }
    },
    methods:{
        delConstrFromList(idConstr)
        {   
            let indexToDel = this.ConstrToCalc.findIndex((el)=>el.key_id == idConstr);
            this.ConstrToCalc.splice(indexToDel ,1);
            // this.calculatedMaterials.splice(indexToDel ,1);
        },
        startConstr(itemId){
            this.tableConstr = 1;
            let AgId = this.Items.find((el)=>el.id == itemId);
            this.constR.ag_id = AgId.ag_id;
            let Constr = this.Items.find((el)=>el.id == itemId);
            this.constR.description = Constr.description;
            let Title = this.Items.find((el)=>el.id == itemId);
            this.constR.title = Title.title;
            let Img = this.Items.find((el)=>el.id == itemId);
            this.constR.img = Img.img;
            let Specific = this.Items.find((el)=>el.id == itemId);
            this.constR.specification = Specific.specification;

            let MaterialName = this.Materials.find((el)=>el.id == this.currentMaterials);
            this.materialNames.name = MaterialName.name;
            let MaterialType = this.Materials.find((el)=>el.id == this.currentMaterials);
            this.materialNames.code = MaterialType.code;
            // let MaterialImg = this.Materials.find((el)=>el.id == this.currentMaterials);
            // this.materialNames.img = MaterialImg.img;

            this.constR.key_id = Date.now();
            
            this.ConstrToCalc.push({...this.constR});

        },
        changeItems(e)
        {
            this.currentItems = e.target.id;
        },
        changeMaterials(e)
        {
            this.currentMaterials = e.target.code;

        },
    }
}
Vue.createApp(App).mount('#app');


   
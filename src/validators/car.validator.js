import Joi from "joi";
// ДЛя более удобной валидации используеться библиотека Joi
//В данном файле мы создаем валидацию что бы она не нагромождалась в файле CarForm


//Прямо обращаемся к  Joi и говорим что объектом валидации будет object в него передаем:
//1) Name инпута из формы ввода данных.
//2) Обращаемя к Joi как value объекта. Указываем тип данных которорый будм валидировать
//3)regex это обозначение в Joi регулярных выражений.
const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Бранд має складатись тільки з літер мін 1 макс 20 літер',
        'string.required': 'Це поле обов\'язкове'
//Сообщение прописываем по принципу кастомных messages (значит настраевыемые ), если его не прописать то при ошибки будет выведен просто базовое сообщения
// в виде текста  кода pattern.
    }),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {
    carValidator
}

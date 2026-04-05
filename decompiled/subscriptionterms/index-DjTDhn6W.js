import {
  SubscriptionTerms as SubscriptionTerms_1,
  $,
} from "./index-DOyq0flg.js";
import { I } from "./IconChevronLeft-D0jsyLIy.js";
const a = "p-Bn35Tg";
const i = "_7fBwCv5d";
const n = "dzP40GMv";
const h = "yKv2yP7L";
const r = "YmfT7TOG";
const d = "qo--XG0T";
const m = "tjhg0aGH";
const o = "XDoqNt1P";
const N = "eJOKcJ6U";

const c = {
  legal: a,
  backButton: i,
  title: n,
  updated: h,
  section: r,
  sectionTitle: d,
  text: m,
  list: o,
  contact: N,
};

export function SubscriptionTerms(p) {
  const s = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      $("/");
    }
  };
  return SubscriptionTerms_1("div", {
    className: c.legal,
    children: [
      SubscriptionTerms_1("button", {
        className: c.backButton,
        onClick: s,
        children: [
          SubscriptionTerms_1(I, { size: 20 }),
          SubscriptionTerms_1("span", { children: "Назад" }),
        ],
      }),
      SubscriptionTerms_1("h1", {
        className: c.title,
        children: "Условия платного доступа ИТД НУКСТА",
      }),
      SubscriptionTerms_1("p", {
        className: c.updated,
        children: "Последнее обновление: 5 апреля 2026",
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "1. Общие положения",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "1.1. Настоящие Условия определяют порядок оформления, оплаты и действия платного доступа ИТД НУКСТА в сервисе итд.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "1.2. Сервис итд предоставляет пользователям основной функционал социальной сети на бесплатной основе. Дополнительно пользователь может приобрести платный доступ ИТД НУКСТА на условиях, предусмотренных настоящим документом.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "1.3. Платный доступ ИТД НУКСТА является добровольной дополнительной опцией и приобретается пользователем в целях поддержки проекта. В период действия платного доступа пользователю предоставляются дополнительные возможности аккаунта, указанные в разделе 3 настоящих Условий.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children: [
              "1.4. Оператором сервиса является:",
              SubscriptionTerms_1("br", {}),
              "Общество с ограниченной ответственностью «ИТД»",
              SubscriptionTerms_1("br", {}),
              "ИНН: 9729415049",
              SubscriptionTerms_1("br", {}),
              "ОГРН: 1267700029838",
              SubscriptionTerms_1("br", {}),
              "Юридический адрес: 119361, г. Москва, вн.тер. г. Муниципальный Округ Очаково-Матвеевское, пер. 1-Й Очаковский, дом 10, помещение 7/3",
            ],
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "1.5. Настоящие Условия являются неотъемлемой частью Пользовательского соглашения сервиса итд.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "1.6. Совершая оплату, пользователь подтверждает, что ознакомился и согласен с настоящими Условиями, Пользовательским соглашением и Политикой конфиденциальности.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "2. Термины",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "2.1. ИТД НУКСТА — дополнительная платная опция сервиса итд, приобретаемая на определённый срок (1 месяц) и предоставляющая пользователю дополнительные возможности аккаунта.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "2.2. Платежный партнер — лицо, обеспечивающее прием и обработку платежей. Прием платежей осуществляется с использованием сервиса ЮKassa (ООО НКО «ЮМани»).",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "2.3. Оплаченный период — срок действия платного доступа, за который пользователем внесена плата.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "3. Что получает пользователь по подписке",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "3.1. В период действия подписки пользователю могут предоставляться следующие дополнительные возможности:",
          }),
          SubscriptionTerms_1("ul", {
            className: c.list,
            children: [
              SubscriptionTerms_1("li", { children: "особый цвет никнейма;" }),
              SubscriptionTerms_1("li", {
                children: "особый значок рядом с никнеймом;",
              }),
              SubscriptionTerms_1("li", {
                children: "ранний доступ к тестовым функциям сервиса.",
              }),
            ],
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "3.2. Ранний доступ к тестовым функциям означает, что пользователь с активной подпиской может получить доступ к отдельным новым функциям сервиса раньше остальных пользователей, в период их тестирования оператором.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "3.3. Тестовые функции являются временными и экспериментальными. После завершения тестирования такие функции могут:",
          }),
          SubscriptionTerms_1("ul", {
            className: c.list,
            children: [
              SubscriptionTerms_1("li", {
                children:
                  "стать доступными всем пользователям сервиса, в том числе без подписки;",
              }),
              SubscriptionTerms_1("li", { children: "быть изменены;" }),
              SubscriptionTerms_1("li", { children: "быть отключены;" }),
              SubscriptionTerms_1("li", {
                children: "не перейти в постоянный функционал сервиса.",
              }),
            ],
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "3.4. Сам по себе последующий перевод тестовой функции в общий бесплатный функционал сервиса не означает, что подписка была оказана ненадлежащим образом и не является основанием для возврата денежных средств.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "3.5. Подписка не предоставляет пользователю исключительных прав на какие-либо функции сервиса и не означает обязанность оператора постоянно поддерживать один и тот же состав тестовых функций в течение всего срока существования сервиса.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "3.6. Отсутствие в отдельные периоды новых тестовых функций не означает неоказание подписки, если иные преимущества подписки продолжают предоставляться, а подписка в целом сохраняет характер дополнительной опции сервиса итд.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "4. Порядок оплаты",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "4.1. Платный доступ ИТД НУКСТА приобретается на срок 1 месяц. Стоимость составляет 199 рублей.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "4.2. Оплата осуществляется в безналичной форме через платежного партнера. Каждая оплата является разовой — автоматическое продление и повторные списания не производятся.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "4.3. Оператор не хранит данные банковской карты пользователя. Обработка платежных данных осуществляется платежным партнером.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "4.4. Платный доступ считается активированным с момента успешного проведения оплаты и действует в течение 1 месяца с момента активации.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "4.5. По истечении оплаченного периода платный доступ прекращается автоматически. Для продления пользователь может совершить новую оплату.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "5. Возврат денежных средств",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "5.1. Денежные средства за оплаченный период, как правило, не возвращаются, поскольку доступ предоставляется с момента оплаты.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "5.2. Неиспользование платного доступа или отдельных его возможностей не является основанием для возврата.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children: "5.3. Возврат возможен в следующих случаях:",
          }),
          SubscriptionTerms_1("ul", {
            className: c.list,
            children: [
              SubscriptionTerms_1("li", {
                children: "ошибочное или двойное списание;",
              }),
              SubscriptionTerms_1("li", {
                children:
                  "невозможность предоставить платный доступ по вине оператора;",
              }),
              SubscriptionTerms_1("li", {
                children:
                  "иные случаи, предусмотренные законодательством Российской Федерации.",
              }),
            ],
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children: [
              "5.4. Для рассмотрения вопроса о возврате пользователь направляет обращение по адресу: ",
              SubscriptionTerms_1("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: c.contact,
                children: "nowkie.com@gmail.com",
              }),
              ", с указанием данных аккаунта, даты и суммы платежа.",
            ],
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "5.5. Оператор рассматривает обращение в разумный срок и при наличии оснований осуществляет возврат тем же способом, которым была произведена оплата.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "6. Изменение стоимости и состава преимуществ",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "6.1. Оператор вправе изменять стоимость, состав преимуществ, а также порядок предоставления платного доступа.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "6.2. Изменения применяются к будущим периодам и не распространяются на уже оплаченный период.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "6.3. Изменение состава тестовых функций допускается оператором в любое время и не считается ненадлежащим исполнением.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "7. Нарушение правил сервиса",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "7.1. Платный доступ действует только в рамках аккаунта пользователя и не может быть передан другому лицу.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "7.2. При нарушении Пользовательского соглашения оператор вправе ограничить или прекратить предоставление платного доступа.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "7.3. Ограничение доступа по основаниям, связанным с нарушением правил, не является основанием для возврата денежных средств.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "8. Возраст и дееспособность",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "8.1. Оформляя подписку, пользователь подтверждает, что обладает правом совершать такие действия в соответствии с законодательством Российской Федерации.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "8.2. Если пользователь не достиг возраста полной дееспособности, оформление подписки допускается только при наличии необходимого согласия законного представителя, если такое согласие требуется по закону.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "8.3. Ответственность за соблюдение требований законодательства в части возраста и дееспособности несет пользователь и, при необходимости, его законный представитель.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "9. Ограничение ответственности",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "9.1. Оператор не гарантирует, что подписка будет полностью соответствовать субъективным ожиданиям пользователя.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "9.2. Оператор не несет ответственности за невозможность использования подписки, если такая невозможность вызвана действиями третьих лиц, перебоями в работе сети Интернет, оборудования пользователя, платежной инфраструктуры либо иными обстоятельствами, не зависящими от оператора.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "9.3. Оператор не несет ответственности за временную недоступность отдельных тестовых функций, если в остальной части подписка предоставляется пользователю и оператор принимает разумные меры для поддержания работоспособности сервиса.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "10. Обработка персональных данных",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "10.1. Для оформления, оплаты, продления, сопровождения и прекращения подписки оператор вправе обрабатывать сведения, связанные с подпиской и платежами пользователя, в объеме, необходимом для исполнения договора, ведения учета, направления уведомлений, рассмотрения обращений и соблюдения требований законодательства.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "10.2. Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности сервиса итд.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "10.3. Для целей приема оплаты и сопровождения подписки оператор вправе передавать необходимые сведения платежному партнеру и иным лицам, участвующим в проведении платежа, в объеме, необходимом для достижения указанных целей.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "11. Изменение условий",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "11.1. Оператор вправе вносить изменения в настоящие Условия подписки.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "11.2. Актуальная редакция Условий подписки размещается на сайте сервиса итд.",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children:
              "11.3. Продолжение использования платного доступа после изменения условий означает согласие пользователя с новой редакцией.",
          }),
        ],
      }),
      SubscriptionTerms_1("section", {
        className: c.section,
        children: [
          SubscriptionTerms_1("h2", {
            className: c.sectionTitle,
            children: "12. Контактная информация",
          }),
          SubscriptionTerms_1("p", {
            className: c.text,
            children: [
              "12.1. По всем вопросам, связанным с оплатой и возвратом денежных средств, пользователь может обратиться по адресу: ",
              SubscriptionTerms_1("a", {
                href: "mailto:nowkie.com@gmail.com",
                className: c.contact,
                children: "nowkie.com@gmail.com",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

export { SubscriptionTerms as SubscriptionTerms, SubscriptionTerms as default };


// Reviews reais do Google Business da Dra. Marina — colados manualmente a partir de prints.
// O campo `procedure` está sendo usado como subtítulo (tempo relativo, formato Google).
// Assim que o /api/reviews for ligado com env, essa lista vira só fallback.
export const feedbackslist = [
    {
        id: 1,
        rating: 5,
        procedure: 'há 3 meses',
        feedback: 'A Marina é maravilhosa! Muito atenciosa, cuidadosa e extremamente sincera, o que hoje em dia faz toda diferença. Fiz alguns preenchimentos com ela e amo como ela prioriza a naturalidade nos resultados. O melhor é que às vezes eu chego querendo fazer mil procedimentos e ela mesma fala que ainda não preciso hahaha. Dá pra ver o quanto ela realmente pensa no bem-estar da paciente e não só em "vender" procedimentos. Me senti super segura e amei o resultado!',
        patient: 'Carolina Turnes da Costa',
        imageURL: ''
    },
    {
        id: 2,
        rating: 5,
        procedure: 'há 4 meses',
        feedback: 'A Dra. cuida do meu rosto há 4 anos! Faço tudo com ela! No início do ano sempre sentamos juntas e fizemos o planejamento do ano! Cada ano que passa estou mais feliz com os resultados, ela sabe cuidar de todos os detalhes! Consultório impecável, tratamento exclusivo, prédio com ótimo acesso, estacionamento rotativo e ótima opção de restaurante de buffet a kg na praça de alimentação!',
        patient: 'Camila Costa',
        imageURL: ''
    },
    {
        id: 3,
        rating: 5,
        procedure: 'há 3 meses',
        feedback: 'Profissional maravilhosa! Não estava mais me reconhecendo no espelho e ela me acolheu e ajudou muito. Gratidão. Indico!',
        patient: 'Eduardo Tonolli',
        imageURL: ''
    },
    {
        id: 4,
        rating: 5,
        procedure: 'há 3 anos',
        feedback: 'Atendimento humanizado e muito atenciosa sempre com foco no que é melhor para o paciente! Sou cliente de harmonização e saúde bucal há anos e confio de olhos fechados!',
        patient: 'Ana Beatriz Cesa',
        imageURL: ''
    },
    {
        id: 5,
        rating: 5,
        procedure: 'há 3 anos',
        feedback: 'Ótimas profissionais, tanto na parte odontológica como de harmonização! Fiquei muito feliz com meus tratamentos, e logo farei mais!!',
        patient: 'Cathy Dubrisky',
        imageURL: ''
    },
]

/* versão anterior — reviews copiadas do Google no repo original, mescladas com placeholders de procedure/rating na rodada 1 do CRO diagnóstico:
export const feedbackslist = [
    {
        id:1,
        rating: 5,
        procedure: 'Harmonização Orofacial',
        feedback:'Ótima profissional, faço todos os meus procedimentos com a Dra Marina, eu amo meus resultados, sempre prezando pela naturalidade, sem falar que não sinto nada de dor, eu amoooooo muito.',
        patient: 'Marya Clara Cardoso',
        imageURL:'https://lh3.googleusercontent.com/a-/ALV-UjX0JLQJvvJ0YxSzVAK9eQCOvdbsdLcmbc523fIAQ0XVzkL_56k=w75-h75-p-rp-mo-br100'
    },
    {
        id:2,
        rating: 5,
        procedure: 'Harmonização Orofacial',
        feedback:'Sou fã da clínica. Atendimento de qualidade, desde o momento em que marcamos consulta/procedimento, até após. Sem falar de toda paciência da Dra. Marina, atenção, dedicação e atendimento personalizado que ela nos dá. Adoro estar aos cuidados dela, amo o resultado e confio de olhos fechados!',
        patient: 'Juliane Bolzan',
        imageURL:''
    },
    {
        id:3,
        rating: 5,
        procedure: 'Preenchimento Labial',
        feedback:'Dra Marina é fantástica! Trabalho super cuidadoso, preciso, de bom gosto. A clínica é linda e super confortável, atendimento ótimo nos mínimos detalhes. Das melhores profissionais de Florianópolis. Recomendo muito!',
        patient: 'Bem Clara',
        imageURL:'https://lh3.googleusercontent.com/a-/ALV-UjUD7ePbYCJiZuOJAPHqejmuO-RKpEHjnZqyG0P9caM_GdXraedP=w75-h75-p-rp-mo-br100'
    },
    {
        id:4,
        rating: 5,
        procedure: 'Harmonização Orofacial',
        feedback:'Simplesmente perfeito. Ambiente e atendimento impecáveis. Sou paciente desde 2021 e todos os procedimentos que fiz ficaram perfeitos. Os produtos são de ótima qualidade e a dra. Marina é muito atenciosa, ela dá uma aula sobre cada método utilizado e os passos utilizados, além de dar a segurança de poder acioná-la sempre que necessário.',
        patient: 'Arinca Ramos Gonzaga',
        imageURL:'https://lh3.googleusercontent.com/a-/ALV-UjUTR9fbZ4ojCFzIzkXwmurTln6eTrHo-fT_ZSgbhi2hNLpTFUMv5A=w75-h75-p-rp-mo-ba3-br100'
    },
    {
        id:5,
        rating: 5,
        procedure: 'Toxina Botulínica',
        feedback:'Estar na MOM Odontologia e Estética é sempre maravilhoso. A Marina nos deixa super à vontade e tem um carinho todo especial por cada paciente. Esse é o segredo do sucesso :)',
        patient: 'Bruna T',
        imageURL:'https://lh3.googleusercontent.com/a-/ALV-UjUgUaVV4rCdawAa1yuZuMCNvwxZPytR9g7PJfQ6nJeLt0pRNUyJ=w75-h75-p-rp-mo-br100'
    },
    {
        id:7,
        rating: 5,
        procedure: 'Harmonização Orofacial',
        feedback:'Faço procedimentos com Marina faz 3 anos já, e cada x amo mais e mais! As mãos dela são leves e sempre com um atendimento impecável! Uma excelente profissional e um lindo ser humano ❤️',
        patient: 'Maria Ribeiro Sombrio',
        imageURL:'https://lh3.googleusercontent.com/a-/ALV-UjUx9lnb6x38_vn4EUYA33z08guPor_wRyZrn5NoHf9x2BZ36o7N=w75-h75-p-rp-mo-br100'
    }
]
*/

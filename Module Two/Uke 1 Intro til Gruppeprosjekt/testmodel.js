const mymodel = {

    app: {
        state: userView,
    },

    input: {
        checkbox1: "checked",
        checkbox2: "checked",
    },

    spørreundersøkelser: [
        {
            id: 1,
            tittel: 'Spørreundersøkelse',
            spørsmål: [
                {
                    spmId: 1,
                    spmTxt: 'Har du tid til påskeeggjakt i juleferien?',
                },
                {
                    spmId: 2,
                    spmTxt: 'Når passer best med felles møte?',
                    spmAlternativer:
                        [
                            {
                                altId: 1,
                                altTxt: 'Mandag 12.mars',
                                noOfReplies: 1,

                            },
                            {
                                altId: 2,
                                altTxt: 'Tirsdag 13.mars',
                                noOfReplies: 1,
                            },
                            {
                                altId: 3,
                                altTxt: 'Onsdag 14.mars',
                                noOfReplies: 1,
                            },
                            {
                                altId: 4,
                                altTxt: 'Torsdag 15.mars',
                                noOfReplies: 1,
                            },
                            {
                                altId: 5,
                                userAnswer: true,
                                altTxt: "Annet"
                            }
                        ]
                },
            ]
        }
    ]
}
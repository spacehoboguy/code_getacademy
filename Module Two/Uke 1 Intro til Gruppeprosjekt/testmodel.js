const mymodel = {

    app: {
        state: userView,
        editMode: false,
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
                {
                    spmId: 3,
                    spmTxt: 'Hvilket klokkeslett passer best?',
                    spmAlternativer:
                        [
                            {
                                altId: 1,
                                altTxt: '10:00',
                                noOfReplies: 1,

                            },
                            {
                                altId: 2,
                                altTxt: '12:30',
                                noOfReplies: 1,
                            },
                            {
                                altId: 3,
                                altTxt: '14:00',
                                noOfReplies: 1,
                            },
                            {
                                altId: 4,
                                altTxt: '14:30',
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
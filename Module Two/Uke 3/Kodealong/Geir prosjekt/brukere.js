let users = [
    {
        userID: 1,
        name: "Alexander Wiese",
        module: "Start IT",
        email: "alex@Wiese.no",
        totalLvl: 1,
        tema: [
            {
                temaID: 1,
                status: "completed",
                deadline: "13.03.2023",
                studentVisibility: true,
                studentWorkability: false,
                temaName: "Trygghet",
                isDone: false,
                tasks: [
                    {
                       
                        isDone: false,
                        taskId: 1,
                        taskType: "essay", //kan være multipleChoice, essay, checked, etc.
                        taskTitle: "Reflekter over selv-ledelse og hva det betyr for deg"
                    }
                ]
                //Skal dette stå her eller flyttes til annen side? 
                // PUSH: users.thema.push
            }
        ],
    },
    {
        userID: 2,
        name: "",
        module: "Start IT",
        email: "",
        thema: [
            {
                temaID: 2,
                studentVisibility: true,
                studentWorkability: true,
                status: "In Progress",
                deadline: "13.03.2023",
                temaName: "Trygghet",
                tasks: [
                    {
                        taskId: 1,
                        isDone: true,
                        taskType: "essay", //kan være multipleChoice, essay, checked, etc.
                        taskTitle: "Reflekter over selv-ledelse og hva det betyr for deg",
                    }
                ]
            }
        ],
    }




]

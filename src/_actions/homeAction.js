import axios from "axios"

export const test = () => 
    async (disp, getState) => {
        const x = await getState()
        console.log(x)
}

export const getData = () =>
    async (disp, getState) => {
        const { home } = getState();
        console.log(home)

        disp({
            type:"HOME_GET_DATA"
        })

        try {
            const resp = await axios({
                url:"https://jsonplaceholder.typicode.com/posts",
                method:"GET"
            });
            if(resp.status === 200){
                disp({
                    type:"HOME_GET_SUCCESS",
                    payload:{
                        data: resp.data,
                        message: resp.statusText
                    }
                })
            }else{
                disp({
                    type:"HOME_GET_FAILED",
                    payload:{
                        message:resp.statusText
                    }
                })
            }
        } catch (error) {
            disp({
                type:"HOME_GET_FAILED",
                payload:{
                    message:error.toString()
                }
            })
        }
    }
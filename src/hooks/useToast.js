import toast from "react-hot-toast"



export default function useToast() {
    
    function error() {
        toast.error(res.error, 
              {
                style: {
                  borderRadius: '4px',
                  background: '#333',
                  color: '#fff',
                },
              }
        )
    }


    function success() {
        toast.success("conta apagada com sucesso", 
            {
                style: {
                    borderRadius: '4px',
                    background: '#333',
                    color: '#fff',
                },
            }
        )
    }

    return { error, success }
}
import  { useEffect } from 'react'
import Layout from '@/pages/Layout'
import EmailDetail from '@/components/common/InboxDetails'
import { useNavigate, useParams } from 'react-router-dom'
import useMailService from '@/redux/services/useMail'
const Details = () => {
    const { id } = useParams(); // Get the email ID from the route params
    const { selectedMail, getMailById } = useMailService();
    const navigate=useNavigate()
    useEffect(() => {
      if (id) {
        getMailById(id); // Fetch the specific mail when the component mounts
      }
    }, [id, getMailById]);
    console.log(selectedMail,"selectedMail")
  return (
    <>
    <Layout>
        <>
        {selectedMail && <EmailDetail onBack={()=>navigate("/")} message={selectedMail}/>}
        </>
    </Layout>
    </>
  )
}

export default Details
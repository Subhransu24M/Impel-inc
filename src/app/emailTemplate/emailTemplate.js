
const emailTemplate = (fname,cnumber,mailid,country,message) => {
  return (
    <>
    <h3>{fname} has submitted the contact form</h3>
    <p>Name : - {fname}</p>
    <p>Contact Number : - {cnumber}</p>
    <p>Mail Id : - {mailid}</p>
    <p>Country : - {country}</p>
    <p>Message : - {message}</p>
    </>
  )
}

export default emailTemplate
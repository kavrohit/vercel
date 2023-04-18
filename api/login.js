module.export = (req,res)=>{
  const {email, password} = req.body;

  if(email === 'test@example.com' && password==='password'){
    res.status(200).json({message:'Login SuccessFull'});
  }else{
    res.status(401).json({message:"invalid email or Passord"})
  }
}
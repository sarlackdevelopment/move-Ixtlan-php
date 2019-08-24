const doApprove = () => {
    $('#send').click(async () => {
        const approveIsWellDone = await (await fetch('src/auth/approve_post.php', { 
            method: 'POST', 
            body: '', 
            headers: { 'Content-Type': 'application/json' } 
        })).json()
        console.log(approveIsWellDone)
    })
}

export default doApprove
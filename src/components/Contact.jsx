export default function Contact(){
    return (
        <>
        <div className="w-full h-80 bg-[#DFFF00] flex justify-center items-center rounded-2xl">
            <div className="w-150 h-full ">
                <div className="flex flex-col gap-10 justify-center items-center w-140 h-80  p-12">
                    <h1 className="text-4xl font-bold pr-10">Join our fashion circle</h1>
                    <p>Receive early access to collections, editorial insights, and invitations to our private studio showcases.</p>
                    <div className="flex gap-4">
                    <input placeholder="Email" className="w-100 h-12 bg-white rounded-2xl outline-none pl-10"/>
                    <button className="w-32 h-12 rounded-2xl bg-black text-white hover:bg-[#353535] ">Subscribe</button>
                    </div>
                </div>
                    
            </div>
        </div>
        </>
    )
}
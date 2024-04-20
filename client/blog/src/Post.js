export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://www.nyu.edu/content/nyu/en/life/information-technology/research-computing-services/high-performance-computing/high-performance-computing-nyu-it/jcr:content/1/par-left/nyuimage.img.620.high.jpg/1629318336381.jpg" alt=""/>
            </div>
            <div className="texts">
                <h2>High Performance Computing (NYU IT)</h2>
                <p className="info">
                    <a className="author">Jack</a>
                    <time>2024-04-07 11:58</time>
                </p>
                <p className="summary">NYU supports high performance computing (HPC) and networking for researchers and scholars whose work is computer-intensive. The service includes shared cycles on several high performance clusters equipped with a variety of research software packages, and the option to purchase additional storage beyond standard allocation.</p>
            </div>
        </div>
    );
}
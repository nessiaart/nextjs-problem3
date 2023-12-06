function Page() {
    return (
      <div style={{ textAlign: 'center' }}>
        <nav style={{ backgroundColor: 'black', color: 'white'}}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
            <li style={{ marginRight: '10px' }}>About</li>
            <li style={{ marginRight: '10px' }}>Download</li>
            <li style={{ marginRight: '10px' }}>Guides</li>
            <li style={{ marginRight: '10px' }}>Blog</li>
            <li style={{ marginRight: '10px' }}>Docs</li>
          </ul>
        </nav>
        <h1>This is a simple website created with Next.js</h1>
        <p><strong>Installation Process:</strong></p>
        <ol style={{ listStyle: 'none', padding: 0}}>
          <li>Installed Node.js on my machine.</li>
          <li>Used the command: "npm install react react-dom next --save" to install Next.js in my terminal.</li>
        </ol>
  
        <p><strong>Building My Web Page:</strong></p>
        <ol style={{ listStyle: 'none', padding: 0}}> 
          <li>Created a 'pages' folder to store my index.js file.</li>
          <li>Wrote code in my index.js file.</li>
          <li>Launched the website using the command: "npm run dev".</li>
          <li>Visited <code>http://localhost:3000</code> to see the result.</li>
        </ol>
  
        <p><strong>Challenges and Solutions:</strong></p>
        <ul style={{ listStyle: 'none', padding: 0}}>
          <li>
            <strong>Challenge 1:</strong> Encountered an issue with the installation of Next.js.
            <br />
            <strong>Solution:</strong> Resolved the issue by installing Node.js on my machine.
          </li>
          <li>
            <br></br>
            <strong>Challenge 2:</strong> Encountered an issue with setting up Next.js.
            <br />
            <strong>Solution:</strong> Resolved the issue by searching online for a step-by-step process on setting up Next.js.
          </li>
        </ul>
      </div>
    );
  }
  
  export default Page;
  
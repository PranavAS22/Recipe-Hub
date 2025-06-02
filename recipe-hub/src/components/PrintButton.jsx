export default function PrintButton({ recipeId, instructionsId }) {
  function handlePrint() {
    const recipeContent = document.getElementById(recipeId)
    const instructionsContent = document.getElementById(instructionsId)
    if (!recipeContent || !instructionsContent) {
      return alert('Content not found for printing.')
    }

    const combinedContent = `
      <div>
        ${recipeContent.outerHTML}
        <hr style="margin: 1rem 0;" />
        ${instructionsContent.outerHTML}
      </div>
    `

    const printWindow = window.open('', '', 'width=700,height=800')
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Recipe</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              padding: 1.5rem; 
              color: #333;
              line-height: 1.5;
            }
            h1, h2, h3, h4 {
              color: #5c3d99;
            }
            pre {
              white-space: pre-wrap;
              font-size: 1rem;
            }
            hr {
              border: none;
              border-top: 1px solid #ddd;
              margin: 1.5rem 0;
            }
          </style>
        </head>
        <body>
          ${combinedContent}
        </body>
      </html>
    `)
    printWindow.document.close()

    printWindow.onload = () => {
      printWindow.focus()
      printWindow.print()
      printWindow.close()
    }
  }

  return (
    <button
      onClick={handlePrint}
      style={{
        marginTop: '2.5rem',
        padding: '1rem 1.5rem',
        backgroundColor: '#84AE92',
        color: 'white',
        border: 'none',
        borderRadius: '0.3rem',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize:'18px',
      }}
      aria-label="Print recipe and instructions"
    >
      Print Recipe & Instructions
    </button>
  )
}

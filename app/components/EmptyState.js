import React, { useEffect } from 'react';

export default function EmptyState({ setOpen, setPrompt }) {
  useEffect(() => {
    // Create the Google AdSense script element
    const googleAdScript = document.createElement('script');
    googleAdScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4592814778191453';
    googleAdScript.async = true;
    googleAdScript.crossOrigin = 'anonymous';

    // Create the ins (ad) element for Google AdSense
    const insElement = document.createElement('ins');
    insElement.className = 'adsbygoogle';
    insElement.style.display = 'block';
    insElement.setAttribute('data-ad-client', 'ca-pub-4592814778191453');
    insElement.setAttribute('data-ad-slot', '3175812385');
    insElement.setAttribute('data-ad-format', 'auto');
    insElement.setAttribute('data-full-width-responsive', 'true');

    // Create the external script element
    const externalScript = document.createElement('script');
    externalScript.type = 'text/javascript';
    externalScript.src = '//goshbiopsy.com/c0/0c/05/c00c056d68aadf6cc07f91c37c4367b6.js';
    externalScript.async = true;

    // Append Google AdSense script to the document
    document.head.appendChild(googleAdScript);

    // Append the elements to the document
    document.getElementById('ad-container').appendChild(insElement);
    document.head.appendChild(externalScript);

    // Push the Google AdSense ad after the script has loaded
    googleAdScript.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
  }, []);

  return (
    <div className="mt-12 sm:mt-24 space-y-6 text-gray-400 text-base mx-8 sm:mx-4 sm:text-2xl leading-12">
      <p>
        {" "}
        Change Bing&apos;s smart level by clicking the{" "}
        <button
          className="prompt-button inline-flex items-center "
          onClick={() => setOpen(true)}
        >
          settings{" "}
        </button>{" "}
        button.
      </p>
      <p>
        I can{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Explain the self-attention mechanism that Transformers use like I'm five."
            )
          }
        >
          explain concepts
        </button>
        , write{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt("Write a poem about open source machine learning. ")
          }
        >
          poems
        </button>{" "}
        and{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Write a python script that trains `bert-large` on the `IMDB` dataset using the Transformers `Trainer` class and Datasets library. I have access to four GPUs, so let's use DDP. Please write the script and then tell me how to launch it on the command line."
            )
          }
        >
          code
        </button>
        ,{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "Respond to this question only based on the information provided here. Cats like dogs, and dogs like rabbits. Cats like anything that dogs like. I really really dislike rabbits. How do cats feel about rabbits?"
            )
          }
        >
          solve logic puzzles
        </button>
        , or even{" "}
        <button
          className="prompt-button"
          onClick={() =>
            setPrompt(
              "please provide 10 fun names for a pet pelican. Please come up with unique emojis to go along with each name. Try not to repeat the same emojis. Make them fun, colorful, and loving names"
            )
          }
        >
          name your pets.
        </button>{" "}
      </p>
      <p>Bing response time is 1-10 seconds</p>
      <p>It depends on your question length</p>

      {/* Container for the ads */}
      <div id="ad-container"></div>
    </div>
  );
}

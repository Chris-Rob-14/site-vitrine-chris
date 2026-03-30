import React from 'react';

export function Logo() {
  return (
    <div className="group grid grid-cols-1 grid-rows-1 items-center font-bold tracking-tighter cursor-pointer font-sans text-xl w-max">
      {/* Default State */}
      <div className="col-start-1 row-start-1 flex items-center transition-opacity duration-300 ease-out opacity-100 group-hover:opacity-0 z-10 justify-start">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-black whitespace-nowrap">
          Christopher Robine
        </span>
      </div>

      {/* Hover State */}
      <div className="col-start-1 row-start-1 flex items-center transition-opacity duration-300 ease-out opacity-0 pointer-events-none group-hover:opacity-100 z-20 justify-start">
        {/* L bracket */}
        <span className="text-primary inline-block transition-transform duration-300 ease-out text-2xl font-light mr-1 translate-x-2 group-hover:-translate-x-1">
          [
        </span>
        
        <div className="glitch-wrapper px-0.5 flex items-center">
          <span 
            className="glitch-text block tracking-[0.15em] text-foreground font-black whitespace-nowrap"
            data-text="CHRS.RBN"
          >
            CHRS.RBN
          </span>
        </div>

        {/* R bracket */}
        <span className="text-secondary inline-block transition-transform duration-300 ease-out text-2xl font-light ml-1 -translate-x-2 group-hover:translate-x-1">
          ]
        </span>
      </div>
    </div>
  );
}

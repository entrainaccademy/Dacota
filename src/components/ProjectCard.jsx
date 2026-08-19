import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border border-zinc-200 hover:border-black rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Image container */}
      <div className="relative h-56 overflow-hidden bg-black">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3 left-3 bg-[#09090B] text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-zinc-700">
          {project.type}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-extrabold text-[#09090B] group-hover:text-[#D32F2F] transition-colors duration-200 uppercase leading-snug">
            {project.title}
          </h3>

          <div className="flex items-center text-xs text-zinc-500 mt-2">
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#D32F2F] shrink-0" />
            <span>{project.location}</span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="text-xs font-bold text-[#09090B] uppercase tracking-wider">Scope of Work:</div>
            <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed bg-zinc-50 p-2.5 rounded border border-zinc-200">
              {project.scope}
            </p>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center justify-between">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-xs font-bold text-[#09090B] hover:text-[#D32F2F] uppercase tracking-wider"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform text-[#D32F2F]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

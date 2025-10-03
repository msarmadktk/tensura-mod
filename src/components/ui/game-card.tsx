import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  href: string;
  stats?: Array<{ label: string; value: string }>;
  className?: string;
}

export function GameCard({ title, description, image, tags, href, stats, className }: GameCardProps) {
  return (
    <Link to={href} className="block group">
      <div className={cn("card-game p-6 h-full", className)}>
        {/* Image */}
        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 5).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 5 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 5} more
                </Badge>
              )}
            </div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="text-xs">
                  <span className="text-muted-foreground">{stat.label}:</span>
                  <span className="ml-1 font-medium text-primary">{stat.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
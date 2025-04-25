import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, name, price, discountPrice, image, category, isNew = false }: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="product-card relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isNew && (
        <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
          Новинка
        </div>
      )}
      
      {discountPrice && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{Math.round((price - discountPrice) / price * 100)}%
        </div>
      )}
      
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Quick Actions Overlay */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full h-10 w-10">
              <Eye className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Link>
      
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">{category}</div>
        <h3 className="font-medium truncate">{name}</h3>
        <div className="flex items-center gap-2">
          {discountPrice ? (
            <>
              <span className="font-bold text-primary">{discountPrice.toLocaleString()} ₽</span>
              <span className="text-muted-foreground line-through text-sm">{price.toLocaleString()} ₽</span>
            </>
          ) : (
            <span className="font-bold text-primary">{price.toLocaleString()} ₽</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

/**
 * INEMEC React Components Library
 * Biblioteca de componentes React siguiendo la identidad de marca INEMEC
 * 
 * @author INEMEC - Ingeniería ElectroMecánica
 * @version 1.0.0
 */

// Components
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Input } from './Input';
export { default as Badge } from './Badge';
export { default as Modal } from './Modal';

// Re-export all components as named exports
import Button from './Button';
import Card from './Card';
import Input from './Input';
import Badge from './Badge';
import Modal from './Modal';

export const InemecComponents = {
  Button,
  Card,
  Input,
  Badge,
  Modal,
};

export default InemecComponents;

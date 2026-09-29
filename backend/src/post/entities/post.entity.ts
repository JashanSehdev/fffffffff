import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  type Relation,
} from 'typeorm';
import { User } from '../../users/entites/users.entity.js';
import { Like } from '../../like/entities/like.entity.js';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  content: string;

  @Column({ type: 'varchar' })
  image: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: Relation<User>;

  @OneToMany(() => Like, (like) => like.user)
  likes: Relation<Like>;
}
